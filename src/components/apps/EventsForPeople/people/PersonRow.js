import React, { Component } from 'react'
import {DragSource} from 'react-dnd'
import {getEmptyImage} from 'react-dnd-html5-backend'
import DragPreview from './PersonDragPreview'

class PersonRow extends Component {
  static propTypes = {

  };

  componentDidMount() {
    this.props.connectPreview(getEmptyImage())
  }

  render() {
    const {style, person, connectDragSource} = this.props
    return (
        <div style = {style}>
          {connectDragSource(<h5>{person.firstName} {person.lastName}</h5>)}
          <div>{person.email}</div>
        </div>
    )
  }
}

const spec = {
  beginDrag(props) {
    return {
      id: props.person.uid,
      DragPreview
    }
  },

  endDrag() {
    console.log('---', 'endDrag')
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

export default DragSource('person', spec, collect)(PersonRow)