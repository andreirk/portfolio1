import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import {connect} from "react-redux";
import {increment} from "../../Clonstagram2/actions/actionCreators";

class PhotoGrid extends Component {

  render() {
    return (
        <div className="photo-grid">
          Photo Grid
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        </div>
    )
  }
}

PhotoGrid.propTypes = {};
PhotoGrid.defaultProps = {};

function mapStateToProps(state) {
  return {
    posts: state.clonstagram.posts,
  }
}



export default connect(mapStateToProps) (PhotoGrid);
