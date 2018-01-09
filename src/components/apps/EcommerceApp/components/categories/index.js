import React, {Component} from 'react';
import {connect} from "react-redux";
import {categoriesSelector, chooseCategory, getActiveCategoryId} from "../../../../../redux/ducks/phones";
import {Link, NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";
import PropTypes from 'prop-types';

class Categories extends Component {

  shouldComponentUpdate(){
    return true
  }

  renderAllCagegory = () => {
    const { activeCategoryId } = this.props
    return (
        <div
            onClick={() => this.props.chooseCategory(0)}
        >
          <NavLink
            to='/admin/phoneshop'
            className="list-group-item"
            activeClassName={!activeCategoryId ? 'active' : ''}
        >
        All
        </NavLink>
        </div>
    )
  }

  renderCagegory = (category, index) => {
    const { activeCategoryId } = this.props
    return (
        <div
            key={index}
            onClick={() => this.props.chooseCategory(category.id)}
        >
          <NavLink
          className="list-group-item"
          activeClassName={activeCategoryId === category.id ? 'active' : ''}
            to={`/admin/phoneshop/categories/${category.id}`}
          >
          {category.name}
          </NavLink>
        </div>
    )
  }


  render() {
    const { categories } = this.props
    return (
        <div className="well">
          <h4>Brand</h4>
          <div className="list-group" >
            {this.renderAllCagegory()}
            {categories.map((category, index) => this.renderCagegory(category, index))}
          </div>
        </div>
    )
  }
}

Categories.propTypes = {};
Categories.defaultProps = {};


const mapStateToProps = (state, ownProps) => ({
  categories: categoriesSelector(state),
  activeCategoryId: getActiveCategoryId(state, ownProps)
})

const mapDispatchToProps = {
  chooseCategory
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter
)(Categories)

