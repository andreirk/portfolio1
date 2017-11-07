import React, { Component } from 'react'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
// import ProtectedRoute from './common/ProtectedRoute'
import AdminPage from './routes/Admin'
import AuthPage from './routes/Auth'
import PersonPage from './routes/PersonPage'
import EventsPage from './routes/EventsPage'

// Containers
import Full from './Full/'

// Views
import Login from '../components/auth/Login'
import Register from '../views/Pages/Register/'
import Page404 from '../views/Pages/Page404/'
import Page500 from '../views/Pages/Page500/'


class App extends Component {

    render() {
        return (
            <div>
                <Switch>
  
                    {/* <ul>
                        <li><NavLink to='/admin' activeStyle = {{color: 'red'}}>admin</NavLink></li>
                        <li><NavLink to='/auth' activeStyle = {{color: 'red'}}>auth</NavLink></li>
                        <li><NavLink to='/people' activeStyle = {{color: 'red'}}>people</NavLink></li>
                        <li><NavLink to='/events' activeStyle = {{color: 'red'}}>events</NavLink></li>
                    </ul> */}
                    
                    {/* <ProtectedRoute path = '/admin' component = {AdminPage}/>
                    <ProtectedRoute path = '/people' component={PersonPage}/>
                    <ProtectedRoute path = '/events' component={EventsPage}/> */}
                    
                    <Route exact path="/" component={Full}/> 

                    <Route  path = '/auth' name="Auth Page" component = {AuthPage}/>
                    <Route exact path="/404" name="Page 404" component={Page404}/>
                    <Route exact path="/500" name="Page 500" component={Page500}/>
                        
                    {/* <Redirect from="/" to="/dashboard" />            */}
                
                    <Route component={ Page404 } />
                </Switch>
            </div>
        )
    }
}

export default App