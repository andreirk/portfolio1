import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import ErrorField from '../common/ErrorField'
import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'


class SignUp extends Component {
  render() {
    return (
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
              <form onSubmit={this.props.handleSubmit}>
                <CardBody className="p-4">
                    <h1>SignUp</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Field name='userName' type="text" component={ErrorField} placeholder="Username"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon>@</InputGroupAddon>
                      <Field name="email" type="text" component={ErrorField} placeholder="Email"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Field name="password" type="password" component={ErrorField} placeholder="Password"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Field name='repeatPassword'  component={ErrorField} type="password" placeholder="Repeat password"/>
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </CardBody>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button className="btn-facebook" block><span>facebook</span></Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn-twitter" block><span>twitter</span></Button>
                      </Col>
                    </Row>
                  </CardFooter>
              </form>


              </Card>
            </Col>
          </Row>
        </Container>

    );
  }
}

const validate = ({ email, password, repeatPassword }) => {
  const errors = {}

  if (!email) errors.email = 'email is a required field'
  if (!password) errors.password = 'password is a required field'

  if(password !== repeatPassword) errors.repeatPassword = "passwords are not equal!"

  if (email && !emailValidator.validate(email)) errors.email = 'invalid email'
  if (password && password.length < 8) errors.password = 'to short'

  return errors
}

export default reduxForm({
  form: 'auth',
  validate
})(SignUp)

