import { combineReducers } from "redux";

// Import all reducers
import weatherReducer from "./weather";
import spaceReducer from "./space";
import movieReducer from "./movie";

const reducers = combineReducers({
  weather: weatherReducer,
  space: spaceReducer,
  movie: movieReducer
})

export default reducers;