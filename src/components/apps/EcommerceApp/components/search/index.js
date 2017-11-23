import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {searchPhone} from "../../../../../ducks/phones";

class Search extends Component {
  state = {
    value: ''
  }

  render() {
    return (
       <div className="well blosd">
         <h3 className="lead">Q-shop</h3>
         <div className="input-group">
           <form onSubmit={this.handleSubmit}>
             <input
                 id="search"
                 onChange={this.handleChange}
                 className="form-control search"
                 type="text"/>
           </form>
           <span className="input-group-btn">
             <button className="btn btn-default">
               <i class="fa fa-search" aria-hidden="true"></i>
             </button>
           </span>
         </div>
       </div>
    );
  }

  handleChange = (event ) => {
    this.setState({
      value: event.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchPhone(this.state.value)
  }
}

Search.propTypes = {};
Search.defaultProps = {};

const mapDispatchToProps = {
  searchPhone
}

export default connect(null, mapDispatchToProps) (Search);
