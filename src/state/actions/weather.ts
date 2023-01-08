export const getWeatherData = (weatherData: any) => {
  return {
    type: "getWeather",
    payload: weatherData
  }
}

export const createWeatherProfile = (data: any) => {
  return {
    type: "createPlayer",
    payload: data
  }
}

export const updateWeatherData = (updatedData: any) => {
  return {
    type: "updateWeather",
    payload: updatedData
  }
}