import React, { Component } from 'react'
import Trash from "../events/Trash";
import SelectedEvents from "../events/SelectedEvents";
import PeopleList from "../people/PeopleList";
import EventList  from "../events/VirtualizedLazyTable";
import {Link} from "react-router-dom";


class Admin extends Component {
  static propTypes = {

  };

  render() {
    return (
        <div className="container">
          <div className="row"><h4>Select events and choose (or <Link to="/admin/people">add new people</Link>) and associate them </h4></div>
         <div className="row">
           <div className="col-md-3 pull-right"><Trash /></div>
         </div>
          <div className="row">
              <div className="col-md-4"><SelectedEvents/></div>
              <div className="col-md-4"><PeopleList/></div>
              <div className="col-md-2"><EventList/></div>
          </div>
        </div>
    )
  }
}

export default Admin