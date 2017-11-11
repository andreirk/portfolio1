import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {userSelector} from '../../ducks/auth'

class ProtectedRoute extends Component {
    static propTypes = {

    };

    render() {
        const {component, ...rest} = this.props
        return <Route {...rest} render = {this.renderRoute}/>
    }

    renderRoute = (...args) => {
        const {authorized} = this.props
        const AuthorizedComponent = this.props.component
        return authorized ? <AuthorizedComponent {...args} /> : <div><h2>UnAuthorized </h2> please <Link to="/auth/signin">log in</Link> </div>
    }
}

export default connect(state => ({
    authorized: !!userSelector(state)
}), null, null, { pure: false })(ProtectedRoute)