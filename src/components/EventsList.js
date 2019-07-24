import React, { Component } from 'react';

class EventsList extends Component {
  render () {
    const {
      eventsPerTen
    } = this.props
    console.log('EVENTS PER TEN', eventsPerTen)
    return (
      <main className="events-list-container">
          <div className='main-header'>
            <h1>Tilburg Theaters</h1>
            <h3>Programma overzicht</h3>
          </div><br/>
  
  
  
          <h2>All events should be rendered here</h2>
      </main>
    );
  }
}

export default EventsList;
