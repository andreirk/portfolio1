import React, { Component } from 'react'
import {Route, NavLink as Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp, signIn} from '../../ducks/auth'
import SignIn from '../../components/auth/SignIn'
import SignUp from '../../components/auth/SignUp'
import Register from '../../components/auth/Register'
import AuthHeader from '../../components/auth/AuthHeader'

class AuthPage extends Component {

    render() {
        return (
            <div>
                <AuthHeader />

                <div className="app flex-row align-items-center">
                <Route path='/auth/signin' render={() => <SignIn onSubmit={this.handleSignIn} />} />
                <Route path='/auth/signup' render={() => <Register onSubmit={this.handleSignUp} />} />

                </div>
            </div>
        )
    }

    handleSignIn = ({email, password}) => { this.props.signIn(email, password) }
    handleSignUp = ({email, password}) => { this.props.signUp(email, password) }
}

export default withRouter (connect(null, { signUp, signIn })(AuthPage))