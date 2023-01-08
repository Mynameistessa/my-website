const initialState = {
  weather: [],
  loading: true
}

const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "getWeather":
      return {
        ...state,
        weatherData: action.payload,
        loading: false
      }

    case "createWeather":
      return {
        ...state,
        createWeatherData: action.payload,
        loading: false
      }

    case "updateWeather":
      return {
        ...state,
        updatedWeather: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default weatherReducer;