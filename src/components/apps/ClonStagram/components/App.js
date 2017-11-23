import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../Clonstagram2/actions/actionCreators';
import React, {Component} from 'react';
import { render } from 'react-dom';

// Import css
// import css from './styles/style.styl';
import PhotoGrid from "./PhotoGrid";
import Single from "./Single";
import {Link, Route} from "react-router-dom";

// Import Components


export class App extends Component {
  render() {
    return (
        <div>
          <h1>
            <Link to="main">Reduxstagram</Link>
          </h1>
          <div>

              <Route path="/" component={PhotoGrid}></Route>
              <Route path="/view/:postId" component={Single}></Route>

          </div>
        </div>
    )
  }
}

App.propTypes = {};
App.defaultProps = {};


// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     comments: state.comments
//   }
// }
//
// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

export default App;


