import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";

class Messages extends Component {

  componentDidUpdate() {
    // get the messagelist container and set the scrollTop to the height of the container
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the messages in the state and create a Message component
    const messages = this.props.messages.map((message, i) => {
      return (
          <Message
              key={i}
              username={message.username}
              message={message.message}
              fromMe={message.fromMe} />
      );
    });
    return (
        <div className='chat-messages' id='messageList'>
          Messages
          { messages }
        </div>
    );
  }

}

Messages.propTypes = {};
Messages.defaultProps = {
  messages: []
};

export default Messages;
