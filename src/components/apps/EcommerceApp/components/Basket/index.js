import React from 'react'
import {connect} from "react-redux";
import {
  basketCheckout, cleanBasket, getBasketPhonesWithCount, removeItemFromBasket,
  totalBasketPriceSelector
} from "../../../../../redux/ducks/phones";
import * as R from "ramda";
import {Link} from "react-router-dom";

const Basket = (props) => {
  const {
    phones,
    totalPrice,
    removeItemFromBasket,
    basketCheckout,
    cleanBasket
    } = props

  const isBasketEmpty = R.isEmpty(phones)

  const renderContent = () => (
      <div>
        {isBasketEmpty && <div> Your shopping cart is empty</div>}
        <div className="table-responsive"  >
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
            {phones.map((phone, index) => (
                <tr
                    key={index}
                    className="item-checout"
                >
                  <td className="first-column-checkout">
                    <img className="img-thumbnail" src={phone.image} alt={phone.name}/>
                  </td>
                  <td>{phone.name}</td>
                  <td>{phone.price}</td>
                  <td>{phone.count} </td>
                  <td>
                    <span
                        onClick={() =>  removeItemFromBasket(phone.id)}
                        className="delete-cart"></span>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        {
          R.not(isBasketEmpty) &&
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total</b>
              ${totalPrice}
            </div>
          </div>
        }
      </div>
  )

  const renderSidebar = () => (
    <div>
      <div>
        <Link
        className="btn btn-info"
        to="/admin/phoneshop"
        >
          <i className="fa fa-info-circle"></i>
          <span>Continue shopping</span>
        </Link>
        {
          R.not(isBasketEmpty) &&
              <div>
                <button
                    onClick={() => cleanBasket()}
                className="btn btn-danger"
                >
                  <i className="fa fa-trash">
                  </i>
                  Clean cart
                </button>
                <button
                    onClick={() => basketCheckout(phones)}
                    className="btn btn-success"
                >
                  <i className="fa fa-check-square-o"></i>
                  Checkout
                </button>
              </div>
        }
      </div>
    </div>
  )

  return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {renderContent()}
            </div>
            <div className="col-md-3 btn-user-checkout">
              {renderSidebar()}
            </div>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = state => ({
  phones:  getBasketPhonesWithCount(state),
  totalPrice: totalBasketPriceSelector(state)
})

const mapDispatchToProps = {
  removeItemFromBasket,
  basketCheckout,
  cleanBasket
}

export default connect(mapStateToProps, mapDispatchToProps) (Basket)