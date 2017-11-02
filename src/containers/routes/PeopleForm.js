import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../common/ErrorField'

export class PeopleForm extends Component {

  render() {
    return (
      <div>
        <h3> Add person </h3>
        <form onSubmit= {this.props.handleSubmit}>
            <Field name='email' type='text'  component= {ErrorField}  label='email' />
            <Field name='firstName' type = 'text' component={ErrorField} label='firstName'/>
            <Field name='lastName' type = 'text' component={ErrorField} label='lastName'/>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )
  }

}


const validate = ({email, firstName, lastName}) => {
  const errors = {}

  if(!email) errors.email = 'email is a required field'
  if(!firstName) errors.firstName = 'provide a first name'
  if(!lastName) errors.lastName = 'provide a last name'

  if(email && !emailValidator.validate(email)) errors.email = 'invalid email'

  return errors 
}

export default  reduxForm({
  form: "people",
  validate
}) (PeopleForm)
