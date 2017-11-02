import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { parsonAdd } from '../../ducks/people'
import SignIn from '../auth/SignIn'
import PeopleForm  from './PeopleForm'

class PeoplePage extends Component {

    render() {
        return (
            <div>
                <h2>People Container Page</h2>
                <PeopleForm onSubmit = {this.handlePersonAdd}/>
            </div>
        )
    }

    handlePersonAdd = ({email, firstName, lastName}) => {
      this.props.parsonAdd({email, firstName, lastName})
    }
      
}

export default connect(null, { parsonAdd })(PeoplePage)