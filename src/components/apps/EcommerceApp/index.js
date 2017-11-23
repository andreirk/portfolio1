import './styles/main.css'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Phones from "./components/phones";
import Layout from "./components/layout";
import {Link, Route, Switch} from "react-router-dom";
import Phone from "./components/Phone/index";
import Basket from "./components/Basket/index";


class AppRouter extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Switch>
              <Route path="/admin/phoneshop/phones/:id" component={Phone}/>
              <Route path="/admin/phoneshop/basket" component={Basket}/>
              <Route path="/admin/phoneshop/categories/:id" component={Phones}/>
              <Route exact path="/admin/phoneshop" component={Phones}/>
            </Switch>
          </Layout>

        </div>
    );
  }
}


export default AppRouter;
