import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";import Photo from './Photo';
import Comments from './Comments';
import {addComment, removeComment} from "./actions/actionCreators";


class Single extends Component {

  render() {
    const { postId } = this.props.match.params;

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
    comments: state.clonstagram.comments,
    posts: state.clonstagram.posts
  }
}

export default connect(mapStateToProps, { addComment, removeComment }) (Single);