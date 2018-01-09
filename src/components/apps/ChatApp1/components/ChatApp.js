import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import config from "./config/index";
import io from 'socket.io-client';
import database from '../../Expensify/firebase/firebase';

class ChatApp extends Component {

  socket = io(config.api).connect();

  componentDidMount(){
    // Listen for messages from the server
    const {username} = this.props;
    const callback = snapshot => {
      const arr = Object.values(snapshot.val())

      const messageObject =  arr[arr.length - 1] || {}
      messageObject.fromMe = true;
      // this.addMessage(messageObject);
      console.log('---on snapshot change--',{ messageObject })
      this.addMessage(messageObject)
    }

    database.ref(`users/${username}/messages`).on('value', callback);


    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  state = {
    messages: []
  }

  render() {
    return (
        <div className="chat-container">
          <h3 className=".chat-h3">React Chat App</h3>
          <Messages messages={this.state.messages} />
          <ChatInput onSend={this.sendToFb} />
        </div>
    );
  }

  sendHandler = (message) => {
    const messageObject = {
      username: this.props.username,
      message
    };

    this.socket.emit(`client:message`, messageObject);
    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  sendToFb = (message) => {

    const uid = 123
    const  username = this.props.username;
    const messageObject = {
      username,
      message
    };


   //  const newPostKey = database.ref(`users/${username}/messages`).push().key;
   //
   //  const updates = {}
   //  updates[`users/${username}/messages` + newPostKey] = messageObject;
   //
   // return database.ref(`users/${username}/messages`).update(updates).then((ref) => {
   //
   //    console.log('---message send--', {message, ref});
   //  });

    return database.ref(`users/${username}/messages`).push(messageObject).then((ref) => {
        console.log('---message send--', {message, ref});
    });

  }


  addMessage = (message) => {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }
}

ChatApp.propTypes = {};
ChatApp.defaultProps = {};

export default ChatApp;
