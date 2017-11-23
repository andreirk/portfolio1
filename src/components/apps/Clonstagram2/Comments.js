import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Comments extends Component {
  renderComment = (comment, i) => {
    return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment .button-inst" onClick={this.props.removeComment.bind(this, this.props.match.params.postId, i)}>&times;</button>
          </p>
        </div>
    )
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { postId } = this.props.match.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
        <div className="comments">
          {this.props.postComments.map(this.renderComment)}
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden />
          </form>
        </div>
    )
  }
}

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;


