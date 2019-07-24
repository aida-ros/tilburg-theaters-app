const initialState = {
  test: null,
  allEvents: []
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: 'Message received'
      }
    default:
      return state
  }
}

export default events;