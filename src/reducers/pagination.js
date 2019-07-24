const initialState = {
  limit: 10,
  offset: 0
}

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return state
    default:
      return state
  }
}

export default pagination;