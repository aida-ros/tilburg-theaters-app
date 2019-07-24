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
    console.log('test', this.props.allEvents)
    return (
      <EventsList/>
    )
  }
}

const mapStateToProps = state => {
  return {
    allEvents: state.events.allEvents,
    selectedEvents: state.events.selectedEvents,
    genres: state.events.genres
  }
}

export default connect(mapStateToProps)(EventsListContainer);