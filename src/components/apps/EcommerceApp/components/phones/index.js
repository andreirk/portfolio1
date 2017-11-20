import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchPhones, loadMorePhones, getPhonesSelector, addPhoneToBasket} from "../../../../../ducks/phones";
import {Link} from "react-router-dom";
import * as R from "ramda";


class Phones extends Component {

  componentDidMount(){
    this.props.fetchPhones()
  }

  render() {
    const {phones, loadMorePhones} = this.props
    console.info('-------', this.props)
    return (
        <div>
          <div className="books row">
            {phones.map((phone, index) => this.renderPhone(phone, index))}
          </div>
          <div className="row">
            <div className="col-md-2">
              <button
                  className="pull-right btn btn-primary"
               onClick={loadMorePhones}
              ></button>
            </div>
          </div>
        </div>
    );
  }

  renderPhone(phone, index) {
    const {addPhoneToBasket} = this.props
    const shortDescription = `${R.take(60, phone.description)}...`

    return (
        <div className="col-sm-4 col-md-4 col-lg-4 book-list" key={index}>
          <div className="thumbnail">
            <img className="img-thumbnail" src={phone.image} alt={phone.name}/>
          </div>
          <div className="caption">
            <h4 className="pull-right">{phone.price}</h4>
            <h4>
              <Link to={`/admin/phoneshop/phones/${phone.id}`}>
                {phone.name}
              </Link>
            </h4>
             <p className="phone-description">{shortDescription}</p>
            <p className="itemButton">
              <button
                  onClick={() => addPhoneToBasket( phone.id)}
                  className="btn btn-primary">
                Buy now!
              </button>
              <Link
                  to={`/admin/phoneshop/phones/${phone.id}`}
                  className="btn btn-default"
              >
                More info
              </Link>
            </p>
          </div>
        </div>
    )
  }
}

Phones.propTypes = {};
Phones.defaultProps = {};

const mapStateToProps = state => ({
  phones: getPhonesSelector(state)
})

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps) (Phones);
