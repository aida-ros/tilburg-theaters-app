import React, { Component } from 'react';
import EventsList from './EventsList';
import Pagination from './Pagination'
import { connect } from 'react-redux'

class EventsListContainer extends Component {
  state = {
    title: '',
    performer: ''
  }
  
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

  filterByGenre = event => {
    const genre = event.target.value
    if (genre === 'genre') {
      return alert('Kies een geldig genre.')
    } else {
      this.props.dispatch({
        type: 'FILTER_BY_GENRE',
        payload: genre
      })
    }
  }

  onChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.dispatch({
      type: 'FILTER_BY_PERFORMER',
      payload: this.state.performer
    })
  }

  render() {
    const paginatedEvents = this.props.selectedEvents.slice(this.props.offset, this.props.offset + this.props.limit)
    return (
      <main>
        <EventsList
          eventsPerTen={paginatedEvents}
          genres={this.props.genres}
          filterByGenre={this.filterByGenre}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Pagination/>
      </main>

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