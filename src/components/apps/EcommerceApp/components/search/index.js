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
         <h3 className="lead">Quick shop</h3>
         <div className="input-group">
           <form onSubmit={this.handleSubmit}>
             <input
                 onChange={this.handleChange}
                 className="form-control"
                 type="text"/>
           </form>
           <span className="input-group-btn">
             <button className="btn btn-default">
               <span className="glyphicon glyphicon-search"/>
             </button>
           </span>
         </div>
       </div>
    );
  }

  handleChange = (event ) => {
    console.log(event.target.value)
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
