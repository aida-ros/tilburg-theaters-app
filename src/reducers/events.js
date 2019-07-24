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

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_EVENTS':
      return {
        ...state,
        allEvents: action.payload,
        selectedEvents: action.payload,
        genres: filterGenres(action.payload)
      }
    case 'FILTER_BY_GENRE':
      return {
        ...state,
        selectedEvents: state.allEvents.filter(event => event.genre === action.payload),
        offset: 0
      }
    default:
      return state
  }
}

export default events;