import React, { Component } from 'react';
import EventsList from './EventsList';
import { connect } from 'react-redux'

class EventsListContainer extends Component {
  componentDidMount = () => {
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetch('https://www.theaterstilburg.nl/api/public/events')
      .then(res => res.json())
      .then(allEvents => {
        this.props.dispatch({
          type: 'FETCH_ALL_EVENTS',
          payload: allEvents
        })

        const maxOffset = allEvents.length
        this.props.dispatch({
          type: 'SET_MAX_OFFSET',
          payload: maxOffset
        })
        
      })
      .catch(console.error)
  }
  
  render () {
    const paginatedEvents = this.props.selectedEvents.slice(this.props.offset, this.props.offset + this.props.limit)
    return (
      <EventsList
        eventsPerTen={paginatedEvents}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    allEvents: state.events.allEvents,
    selectedEvents: state.events.selectedEvents,
    genres: state.events.genres,
    offset: state.pagination.offset,
    limit: state.pagination.limit
  }
}

export default connect(mapStateToProps)(EventsListContainer);