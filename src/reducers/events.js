const initialState = {
  allEvents: []
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_EVENTS':
      return {
        ...state,
        allEvents: action.payload
      }
    default:
      return state
  }
}

export default events;