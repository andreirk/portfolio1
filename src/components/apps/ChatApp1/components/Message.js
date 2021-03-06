import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';
    return (
        <div className={`message ${fromMe}`}>
          <div className='username'>
            { this.props.username }
          </div>
          <div className='message-body'>
            { this.props.message }
          </div>
        </div>
    );
  }
}

Message.propTypes = {};
Message.defaultProps = {};

export default Message;
