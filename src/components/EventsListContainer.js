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
          type: 'TEST'
        })
      })
      .catch(console.error)
  }
  
  render () {
    return (
      <EventsList/>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(EventsListContainer);