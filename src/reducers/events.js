import { filterGenres, sortByDate, reverseDates } from "./actions/actions";

const initialState = {
  allEvents: [],
  selectedEvents: [],
  genres: []
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_EVENTS':
      sortByDate(action.payload)
      return {
        ...state,
        allEvents: reverseDates(action.payload),
        selectedEvents: reverseDates(action.payload),
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
        selectedEvents: state.allEvents.filter(event => event.title.includes === action.payload)
      }
    default:
      return state
  }
}

export default events;