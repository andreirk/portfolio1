import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {reduxForm, Field} from 'redux-form'
import ErrorField from '../../../components/common/ErrorField'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
// import {signUp, signIn} from '../../ducks/auth'
// import SignIn from '../../../components/auth/SignIn'
// import SignUp from '../../../components/auth/SignUp'

const EmailField = (props) => {
  return (
    
      <Input type="email" {...props} placeholder="Email"/>
    
  )
}

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                <div>
                <h2>Auth page</h2>

                </div>

                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



}

export default reduxForm({
  form: 'auth',
}) (Login);
