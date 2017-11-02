import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import emailValidator from 'email-validator'
import ErrorField from '../common/ErrorField'

class SignIn extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
               <form onSubmit = {this.props.handleSubmit}>
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      {/* <Field name='email' component={EmailField}  /> */}
                      <Field name = 'email' component = {ErrorField} type = 'text' placeholder="Email"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      {/* <Input type="password" placeholder="Password"/> */}
                      <Field name = 'password' component = {ErrorField} type = 'password'  placeholder="Password"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" type='submit' className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                  </form>

                {/* <form onSubmit = {this.props.handleSubmit}>
                     <Field name = 'email' component = {ErrorField} type = 'text' label = 'email'/>
                     <Field name = 'password' component = {ErrorField} type = 'password' label = 'password'/>
                    <div>
                        <input type = 'submit'/>
                    </div>
                </form> */}
            </div>
        )
    }
}

const validate = ({ email, password }) => {
    const errors = {}

    if (!email) errors.email = 'email is a required field'
    if (!password) errors.password = 'password is a required field'

    if (email && !emailValidator.validate(email)) errors.email = 'invalid email'
    if (password && password.length < 8) errors.password = 'to short'

    return errors
}

export default reduxForm({
    form: 'auth',
    validate
})(SignIn)