import { combineReducers } from "redux";

// Import all reducers
import weatherReducer from "./weather";

const reducers = combineReducers({
  weather: weatherReducer
})

export default reducers;