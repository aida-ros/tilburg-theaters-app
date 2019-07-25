import React from 'react';
import Event from './Event'

function EventsList (props) {
  const { eventsPerTen } = props

  const renderEvents = events => {
    if (!events) {
      return <p>Loading events...</p>
    } else {
      return events.map(event => {
        return <Event key={event.id} event={event} />
      })
    }
  }  

    return (
      <main className="events-list-container">
        <div className='selected-events-list'>
          {renderEvents(eventsPerTen)}
        </div>
      </main>
    );
}

export default EventsList;
