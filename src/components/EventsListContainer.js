import React, { Component } from 'react';
import EventsList from './EventsList';

class EventsListContainer extends Component {
  componentDidMount = () => {
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetch('https://www.theaterstilburg.nl/api/public/events')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error)
  }
  
  render () {
    return (
      <EventsList/>
    )
  }
}

export default EventsListContainer;