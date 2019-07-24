const initialState = {
  limit: 10,
  offset: 0,
  maxOffset: null
}

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAX_OFFSET':
      return {
        ...state,
        maxOffset: action.payload
      }
    case 'NEXT_PAGE':
      return {
        ...state,
        offset: state.offset + state.limit
      }
    case 'PREV_PAGE':
      return {
        ...state,
        offset: state.offset - state.limit
      }
    default:
      return state
  }
}

export default pagination;