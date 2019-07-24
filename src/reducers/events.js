const initialState = {
  allEvents: [],
  selectedEvents: [],
  genres: []
}

const filterGenres = events => {
  const genres = [];
  events.filter(event => {
    if (!genres.includes(event.genre)) {
      return genres.push(event.genre)
    }
  });
  return genres
}

const sortByDate = events => {
  events.sort((a, b) => {
    if (a.startsAt < b.startsAt) { return -1; }
    if (a.startsAt > b.startsAt) { return 1; }
    return 0;
  })
  return events
}

const reverseDates = events => {

  const separate = events.map(event => {
    return event.startsAt.split('T')
  })

  const reverse = separate.map(date => {
    return date[0].split('-').reverse().join('-')
  })
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_EVENTS':
      sortByDate(action.payload)
      // reverse(action.payload)
      return {
        ...state,
        allEvents: action.payload,
        selectedEvents: action.payload,
        genres: filterGenres(action.payload)
      }
    case 'FILTER_BY_GENRE':
      return {
        ...state,
        selectedEvents: state.allEvents.filter(event => event.genre === action.payload)
      }
    case 'FILTER_BY_PERFORMER':
      return {
        ...state,
        selectedEvents: state.allEvents.filter(event => event.performer === action.payload)
      }
    case 'FILTER_BY_TITLE':
      return {
        ...state,
        selectedEvents: state.allEvents.filter(event => event.title === action.payload)
      }
    default:
      return state
  }
}

export default events;