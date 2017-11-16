import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Dashboard from '../../views/Dashboard/Dashboard';
import Charts from '../../views/Charts/Charts';
import Widgets from '../../views/Widgets/Widgets';

// Components
import Buttons from '../../views/Components/Buttons/Buttons';
import PersonPage from '../apps/EventsForPeople/routes/PersonPage'
import EventsPage from '../apps/EventsForPeople/routes/EventsPage'

// Icons
import FontAwesome from '../../views/Icons/FontAwesome/FontAwesome';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/SimpleLineIcons';
import Page404 from "../common/Page404/Page404";
import IndecisionApp from "../apps/Indecision/components/IndecisionApp";
import Reduxstagram from "../apps/ClonStagram/reduxstagram";
import App from "../apps/Clonstagram2/routes/App";


class AdminPage extends Component {
  constructor(props){
    super(props)
    this.match = props.match
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              {/*<li><NavLink to='/admin/people' activeStyle = {{color: 'red'}}>people</NavLink></li>*/}
              {/*<li> <NavLink to='/admin/events' activeStyle = {{color: 'red'}}>events</NavLink></li>*/}
              <Switch>
                {/*<Route exact path="/charts" name="Dashboard" component={Dashboard}/>*/}
                <Route path="/admin/buttons" name="Buttons" component={Buttons}/>
                <Route path="/admin/indecision" name="Indecision" component={IndecisionApp}/>
                {/*<Route path = '/admin' name="Admin Page" component = {AdminPage}/>*/}
                <Route path = '/admin/people' name="People Page" component = {PersonPage}/>
                <Route path = '/admin/events' name="Events Page" component = {EventsPage}/>
                <Route path = '/admin/reduxstagram' name="Events Page" component = {App}/>
                {/*<Route exact path="/" name="Home" render={() => (<Redirect to="/auth" />)}/>*/}
                {/*<Route component={ Page404 } />*/}
              </Switch>

            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminPage;
