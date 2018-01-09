import React, { Component } from 'react'
import {connect} from 'react-redux'
import {eventSelector} from "../../../../redux/ducks/events";

class EventDragPreview extends Component {
  static propTypes = {

  };

  render() {
    return (
        <div>
          <h1>{this.props.event.title}</h1>
        </div>
    )
  }
}

export default connect((state, props) => ({
  event: eventSelector(state, props)
}))(EventDragPreview)