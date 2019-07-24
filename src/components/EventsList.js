import React, { Component } from 'react';

class EventsList extends Component {
  renderEvents = events => {
    if (!events) {
      return <p>Loading events...</p>
    } else {
      return events.map(event => {
        return <div key={event.id} className='event-container'>
          <h4>{event.title}</h4>
          <h5>{event.performer}</h5>
          <h5>{event.location}</h5>
          <img alt='performer' src={event.images[0]}/>
          <p>{event.startsAt}</p>
        </div>
      })
    }
  }
  
  render() {
    const { eventsPerTen
    } = this.props

    return (
      <main className="events-list-container">
        <div className='main-header'>
          <h1>Tilburg Theaters</h1>
          <h3>Programma overzicht</h3>
        </div><br />

        {this.renderEvents(eventsPerTen)}



        <h2>All events should be rendered here</h2>
      </main>
    );
  }
}

export default EventsList;
