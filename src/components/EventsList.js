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
          <h5>Locatie: {event.location}</h5>
          <img alt='performer' src={event.images[0]} />
          <p>{event.startsAt}</p>
        </div>
      })
    }
  }

  renderGenres = genres => {
    if (!genres) {
      return
    } else {
      return genres.map(genre => <option value={genre}>{genre}</option>)
    }
  }

  render() {
    const { eventsPerTen,
      genres,
      filterByGenre } = this.props

    return (
      <main className="events-list-container">
        <div className='main-headers'>
          <h1>Tilburg Theaters</h1>
          <h3>Programma overzicht</h3>
        </div><br />

        <select
          id="genres"
          onChange={filterByGenre}>
            <option value='genre'>Zoek op genre</option>
            {this.renderGenres(genres)}
        </select>

        <div className='selected-events-list'>
          {this.renderEvents(eventsPerTen)}
        </div>
        

      </main>
    );
  }
}

export default EventsList;
