import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import config from "./config/index";
import io from 'socket.io-client';

class ChatApp extends Component {

  socket = io(config.api).connect();

  componentDidMount(){
    // Listen for messages from the server
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
          <ChatInput onSend={this.sendHandler} />
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
