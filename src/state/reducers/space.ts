const initialState = {
  space: [],
  loading: true
}

const spaceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "getSpaceData":
      return {
        ...state,
        spaceData: action.payload,
        loading: false
      }
    case "getCrabData":
      return {
        ...state,
        crabData: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default spaceReducer;