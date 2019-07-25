import React, { Component } from 'react';
import EventsList from './EventsList';
import Filter from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
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
      this.props.dispatch({
        type: 'RESET_OFFSET'
      })
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  filterPerformer = event => {
    event.preventDefault()
    
    this.props.dispatch({
      type: 'FILTER_BY_PERFORMER',
      payload: this.state.performer
    })
    this.props.dispatch({
      type: 'RESET_OFFSET'
    })

    this.setState({
      performer: ''
    })
  }

  filterTitle = event => {
    event.preventDefault()
    this.props.dispatch({
      type: 'FILTER_BY_TITLE',
      payload: this.state.title
    })
    this.props.dispatch({
      type: 'RESET_OFFSET'
    })

    this.setState({
      title: ''
    })
  }

  render() {
    const paginatedEvents = this.props.selectedEvents.slice(this.props.offset, this.props.offset + this.props.limit)
    return (
      <main>
        <div className='main-headers'>
          <h1>Tilburg Theaters</h1>
          <h3>Programma overzicht</h3>
        </div><br />
        <Filter
          genres={this.props.genres}
          onChange={this.onChange}
          filterByGenre={this.filterByGenre}
          filterPerformer={this.filterPerformer}
          filterTitle={this.filterTitle}
        />
        
        <EventsList
          eventsPerTen={paginatedEvents}
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