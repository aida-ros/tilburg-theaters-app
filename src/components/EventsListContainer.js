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
    allEvents: state.events.allEvents
  }
}

export default connect(mapStateToProps)(EventsListContainer);