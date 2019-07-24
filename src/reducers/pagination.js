const initialState = {
  limit: 10,
  offset: 0,
  maxOffset: null
}

const check = (maxOffset, newOffset) => {
  if (newOffset < 0) {
    return 0
  } else if (newOffset > maxOffset) {
    return maxOffset
  } else {
    return newOffset
  }
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
        offset: check(state.maxOffset, state.offset + state.limit)
      }
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        offset: check(state.maxOffset, state.offset - state.limit)
      }
    default:
      return state
  }
}

export default pagination;