import React, { Component } from 'react'
import EventsTable from '../events/VirtualizedLazyTable'

class EventsPage extends Component {

    render() {
        return (
            <div>
                EventsPage
                 <EventsTable />
            </div>
        )
    }
}

export default EventsPage