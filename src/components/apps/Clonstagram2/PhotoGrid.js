import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import {connect} from "react-redux";

class PhotoGrid extends Component {

  render() {
    console.log("----------!!!", this.props )
    return (
        <div className="photo-grid">
          {/*<div className="row">*/}
            {this.renderPhotos()}
          {/*</div>*/}
          {/*{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}*/}
        </div>
    )
  }

  renderPhotos() {
    return this.props.posts.map((post, i) => {
      return ( <Photo {...this.props} post={post}  key={i} i={i}/>
          // <div className="col-sm-6 col-md-4 col-lg-3 mt-4">  </div>
      )
    })
  }

}

PhotoGrid.propTypes = {};
PhotoGrid.defaultProps = {};

function mapStateToProps(state) {
  return {
    posts: state.clonstagram.posts,
    comments: state.clonstagram.comments
  }
}



export default connect(mapStateToProps) (PhotoGrid);
