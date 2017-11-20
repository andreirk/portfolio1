import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getTotalBasketCountSelector, totalBasketPriceSelector} from "../../../../../ducks/phones";

const BasketCart = (props) => {
  const {totalPrice, totalBasketCount} = props
  return (
      <div className="cart">
        <div className="dropdown">
          <Link
            to="/basket"
            id="dLabel"
            className="btn btn-inverse btn-block btn-lg"
          >
            <i className="fa fa-fa-shopping-cart"/>
            <span>{totalBasketCount} item(s) - ${totalPrice} </span>
          </Link>
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCountSelector(state),
    totalPrice: totalBasketPriceSelector(state)
  }
}

export  default connect(mapStateToProps) (BasketCart)