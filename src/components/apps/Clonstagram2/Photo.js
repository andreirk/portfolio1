import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from "react-redux";
import {increment} from "./actions/actionCreators";


class Photo extends Component {

  renderPhoto(post, i, comments) {
    return (
        <figure className="grid-figure">
          <div className="grid-photo-wrap">
            <Link to={`/admin/reduxstagram/view/${post.code}`}>
              <img src={post.display_src} alt={post.caption} className="grid-photo" />
            </Link>
            <ReactCSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              <span key={post.likes} className="likes-heart">{post.likes}</span>
            </ReactCSSTransitionGroup>

          </div>

          <figcaption>
            <p>{post.caption}</p>
            <div className="control-buttons">
              <button onClick={this.props.increment.bind(null, i)} className="likes, button-inst">&hearts; {post.likes}</button>
              <Link className="button-inst" to={`/admin/reduxstagram/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0 }
              </span>
              </Link>
            </div>
          </figcaption>

        </figure>
    )
  }

  render() {
    const { post, i, comments } = this.props;

    return ( this.renderPhoto(post, i, comments) )
  }

}

Photo.propTypes = {};
Photo.defaultProps = {};

export default connect(null, {increment}) (Photo);