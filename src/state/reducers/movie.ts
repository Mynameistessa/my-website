const initialState = {
  space: [],
  loading: true
}

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "getMovieData":
      return {
        ...state,
        movieData: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default movieReducer;