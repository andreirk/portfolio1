import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href="http://andreirk.io">Admin</a> &copy; 2017 Andrey Sok.</span>
        <span className="ml-auto">Powered by <a href="http://reactjs.com">React</a></span>
      </footer>
    )
  }
}

export default Footer;
