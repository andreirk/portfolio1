import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Table, Column, InfiniteLoader} from 'react-virtualized'
import 'react-virtualized/styles.css'
import TableRow from './TableRow'
import {eventListSelector, fetchLazy, moduleName, selectEvent} from "../../../../ducks/events";

export class EventList extends Component {
  static propTypes = {

  };

  componentDidMount() {
    this.props.fetchLazy()
  }

  render() {
    const {loaded, events} = this.props
    return (
        <div >
            <div>Select events here</div>
            <InfiniteLoader
            isRowLoaded={this.isRowLoaded}
            rowCount={loaded ? events.length : events.length + 1}
            loadMoreRows={this.loadMoreRows}
        >

          {({onRowsRendered, registerChild}) =>
              <Table
                  ref={registerChild}
                  rowCount={events.length}
                  rowGetter={this.rowGetter}
                  rowHeight={40}
                  headerHeight={50}
                  overscanRowCount={5}
                  width={700}
                  height={300}
                  onRowClick={this.handleRowClick}
                  onRowsRendered={onRowsRendered}
                  rowRenderer={this.getRowRenderer}
              >
                  <Column
                      label="title"
                      dataKey="title"
                      width={280}
                  />
                  <Column
                      label="where"
                      dataKey="where"
                      width={210}
                  />
                  <Column
                      label="when"
                      dataKey="month"
                      width={130}
                  />
              </Table>
          }
        </InfiniteLoader>
        </div>
    )
  }

  getRowRenderer = (rowCtx) => <TableRow {...rowCtx} />

  isRowLoaded = ({ index }) => index < this.props.events.length

  loadMoreRows = () => {
    this.props.fetchLazy()
  }

  rowGetter = ({ index }) => {
    return this.props.events[index]
  }

  handleRowClick = ({rowData}) => {
    const {selectEvent} = this.props
    selectEvent && selectEvent(rowData.uid)
  }
}

export default connect(state => ({
  events: eventListSelector(state),
  loading: state[moduleName].loading
}), {fetchLazy, selectEvent})(EventList)