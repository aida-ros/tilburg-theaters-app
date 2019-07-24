import React from 'react';

function Event (props) {
  const { event } = props
  
  return (
     <div key={event.id} className='event-container'>
          <h4>{event.title}</h4>
          <h5>{event.performer}</h5>
          <h5>Locatie: {event.location}</h5>
          <img alt='performer' src={event.images[0]} />
          <p>{event.date}</p>
        </div>
  );
}

export default Event;
