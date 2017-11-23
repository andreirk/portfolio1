import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatApp from "./ChatApp";
import '../styles/style.scss';

class App extends Component {
  state = { username: '' }

  render() {

    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
          <ChatApp username={this.state.username} />
      );
    }

    return (
        <form onSubmit={this.usernameSubmitHandler} className="username-container">
          <h1>React Instant Chat</h1>
          <div>
            <input
                type="text"
                onChange={this.usernameChangeHandler}
                placeholder="Enter a username..."
                required />
          </div>
          <input type="submit" value="Submit" />
        </form>
    );
  }

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  usernameSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
