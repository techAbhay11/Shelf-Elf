
const initState = {
  results: []
}

const searchReducer = (state = initState, action) => {
  if(action.type === 'SEARCH_BOOK') {
    return {
      ...state,
      results: action.result
    }
  }

  else {
    return state;
  }
}

export default searchReducer;
