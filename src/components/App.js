import React, { Component } from 'react'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
import AuthPage from './routes/Auth'
import ProtectedRoute from "./common/ProtectedRoute";

// Containers
import Full from './Full/Full'

// Views
import Page404 from './common/Page404/Page404'
import EventsPage from "./routes/EventsPage";



class App extends Component {

  render() {
    return (
        <div>
          {/*<ul>*/}
          {/*<li><NavLink to='/admin' activeStyle = {{color: 'red'}}>admin</NavLink></li>*/}
          {/*<li><NavLink to='/auth' activeStyle = {{color: 'red'}}>auth</NavLink></li>*/}
          {/*<li><NavLink to='/people' activeStyle = {{color: 'red'}}>people</NavLink></li>*/}
          {/*<li> <NavLink to='/events' activeStyle = {{color: 'red'}}>events</NavLink></li>*/}
          {/*</ul> */}
          <Switch>
            {/* <ProtectedRoute path = '/admin' component = {AdminPage}/>
                    <ProtectedRoute path = '/people' component={PersonPage}/>*/}
            {/*<ProtectedRoute path='/events' component={EventsPage}/>*/}
            {/*<Route exact path="/" name="Home" render={() => (<Redirect to="/admin" />)}/>*/}
            <Route path="/admin" component={Full}/>
            <Route path='/auth' name="Auth Page" component={AuthPage}/>
            {/*<Route exact path="/404" name="Page 404" component={Page404}/>*/}

            {/*<Redirect from="/" to="/dashboard" />*/}
            <Route component={ Page404 } />

          </Switch>
        </div>
    )
  }
}

export default App