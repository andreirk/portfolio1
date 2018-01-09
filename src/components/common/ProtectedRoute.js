import React, { Component } from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {userSelector} from '../../redux/ducks/auth'

class ProtectedRoute extends Component {
    static propTypes = {

    };

    render() {
        const {component, ...rest} = this.props
        return <Route {...rest} render = {this.renderRoute}/>
    }

    renderRoute = (...args) => {
        const {authorized, component: AuthorizedComponent, ...rest} = this.props
        // const AuthorizedComponent = this.props.component
        return authorized ? <AuthorizedComponent {...rest} />
           : <Redirect to="/auth"/> //  <div><h2>UnAuthorized </h2> please <Link to="/auth/signin">log in</Link> </div>
    }
}

export default connect(state => ({
    authorized: !!userSelector(state)
}), null, null, { pure: false })(ProtectedRoute)