import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink as Link, withRouter} from 'react-router-dom'
import {Container,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge,
  Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

export class AuthHeader extends Component {
  static propTypes = {

  }

  render() {
    return (
      <header className="app-header navbar">
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="#">Auth</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>

          <NavItem className="d-md-down-none">
            <Link to='/auth/signin' className="btn btn-primary" activeClassName="btn-success">Sign in</Link>
          </NavItem>
          <NavItem className="d-md-down-none">
            <Link to='/auth/signup'  className="btn btn-primary" activeClassName='btn-success'>Sign up</Link>
          </NavItem>
        </Nav>
        <NavbarToggler className="d-md-down-none" >
        <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
      </header>
    )
  }
}

export default AuthHeader
