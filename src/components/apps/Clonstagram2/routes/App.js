import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, Route, Switch} from "react-router-dom";
import PhotoGrid from "../PhotoGrid";
import Single from "../Single";

class App extends Component {
  render() {
    return (
        <div>

          <Link to="/admin/reduxstagram" >Photos</Link>

          <div>
            <Switch>
            <Route exact path='/admin/reduxstagram' component={PhotoGrid}/>
            <Route path='/admin/reduxstagram/view/:postId' component={Single}/>
          </Switch>
          </div>
        </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
