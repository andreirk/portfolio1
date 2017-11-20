import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


export const history = createHistory();

const AppRouter
    = (props) => (
    <div className="expensify-app">
      <Link to='/admin/expensify/create'>Create</Link>

      {/*<Switch>*/}
        <Route  path="/admin/expensify" component={ExpenseDashboardPage} />
        {/*<Route path="/admin/expensify/create" component={AddExpensePage} />*/}
        {/*<Route path="/edit/:id" component={EditExpensePage} />*/}
        {/*<Route component={NotFoundPage} />*/}
      {/*</Switch>*/}
    </div>
);

export default AppRouter
;
