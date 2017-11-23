import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChatInput extends Component {

  state = {
    chatInput: ''
  }

  render() {
    return (
        <form className="chat-input" onSubmit={this.submitHandler}>
          <input type="text"
                 onChange={this.textChangeHandler}
                 value={this.state.chatInput}
                 placeholder="Write a message..."
                 required />
        </form>
    );
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onSend(this.state.chatInput);
    this.setState({ chatInput: '' });
  }

  textChangeHandler = (event) => {
    this.setState({ chatInput: event.target.value });
  }
}

ChatInput.propTypes = {};
ChatInput.defaultProps = {};

export default ChatInput;
