import Photo from './Photo';
import Comments from './Comments';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addComment, increment, removeComment} from "../../Clonstagram2/actions/actionCreators";

class Single extends Component {
  render() {
    const { postId } = this.props.params;

    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];

    const postComments = this.props.comments[postId] || [];

    return (
        <div className="single-photo">
          <Photo i={i} post={post} {...this.props} />
          <Comments postComments={postComments} {...this.props} />
        </div>
    )
  }
}

Single.propTypes = {};
Single.defaultProps = {};

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}


export default connect(mapStateToProps, { increment, addComment, removeComment }) (Single);


