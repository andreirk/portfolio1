import './styles/main.css'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Phones from "./components/phones";
import Layout from "./components/layout";
import {Link, Route, Switch} from "react-router-dom";
import Phone from "./components/Phone/index";


class AppRouter extends Component {
  render() {
    return (
        <div>
          <Link to="edit">to edit</Link>
          <Layout>
            <Switch>
              <Route path="/admin/phoneshop/phones/:id" component={Phone}/>
              <Route path="/admin/phoneshop" component={Phones}/>
            </Switch>
          </Layout>
        </div>
    );
  }
}


export default AppRouter;
