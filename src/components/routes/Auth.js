import React, { Component } from 'react'
import {Route, NavLink as Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp, signIn, signOut} from '../../ducks/auth'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import AuthHeader from '../auth/AuthHeader'

class AuthPage extends Component {

    render() {
        return (
            <div>
                <AuthHeader />

                <div className="app flex-row align-items-center">
                <Route path='/auth/signin' render={() => <SignIn onSubmit={this.handleSignIn} />} />
                <Route path='/auth/signup' render={() => <SignUp onSubmit={this.handleSignUp} />} />

                </div>
            </div>
        )
    }

    handleSignIn = ({email, password}) => { this.props.signIn(email, password) }
    handleSignUp = ({email, password}) => { this.props.signUp(email, password) }
    handleSignOut = () =>  this.props.signOut()
}

export default withRouter (connect(null, { signUp, signIn, signOut })(AuthPage))