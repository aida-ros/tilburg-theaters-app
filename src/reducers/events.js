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
    if(a.startsAt < b.startsAt) { return -1; }
    if(a.startsAt > b.startsAt) { return 1; }
    return 0;
  })
  return events
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_EVENTS':
      sortByDate(action.payload)
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
    default:
      return state
  }
}

export default events;