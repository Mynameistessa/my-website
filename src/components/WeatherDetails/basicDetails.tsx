import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from 'next/image'

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

// Import all actions and bind them
import { getWeatherData } from "../../state/actions/weather";
import rain from "../../../public/rain.svg"
import wind from "../../../public/wind.svg"
import cloudy from "../../../public/cloudy.svg"
import cloudywhite from "../../../public/cloudy-white.svg"
import { useTheme } from 'next-themes'

import Loader from "../loader";

const styledSVG = styled.svg`
  fill:  ${props => props.theme === 'dark' ? 'white' : 'black'}
`;

const BasicDetails: React.FC = () => {
  const weatherData = useSelector((state: any) => state?.weather.weatherData);
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme()

  const options = {
    method: 'GET',
    url: 'https://dark-sky.p.rapidapi.com/50.819519,-0.136420',
    params: { units: 'auto', lang: 'en' },
    headers: {
      'X-RapidAPI-Key': '4de60a9b92msh66dea4095a28b15p1ba9fajsnefbb67e4f064',
      'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
    }
  };

  const fetchWeather = async () => {
    await axios.request(options).then((response) => {
      dispatch(getWeatherData(response.data))
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    fetchWeather()
  }, [])


  const weatherDarkIconMap: { [key: string]: string } = {
    wind: 'wind',
    rain: 'rain',
    cloudy: 'cloudywhite'
  };

  const weatherLightIconMap: { [key: string]: string } = {
    wind: 'wind',
    rain: 'rain',
    cloudy: 'cloudy'
  };

  const getWeatherIcon = (icon: string, theme: string): string => {
    if (theme === 'dark') {
      if (weatherDarkIconMap[icon]) {
        return weatherDarkIconMap[icon]
      };
    } else {
      if (weatherLightIconMap[icon]) {
        return weatherDarkIconMap[icon]
      };
    }
    return '/cloudy-white.svg';
  }

  return (
    <>
      {
        (!weatherData == undefined) ?
          <>
            <Loader />
          </>
          :
          <>
            <div>
              <h3 className="dark:text-red-100 text-neutral-900">This is the weather currently in Brighton: {weatherData?.currently.summary}</h3>
              {/* wind is broken */}
              {weatherData?.currently.icon && theme ? (
                <Image
                  src={getWeatherIcon(weatherData?.currently.icon, theme)}
                  alt={weatherData.currently.icon}
                  width='30'
                  height='30'
                // toggle color based on darkmode
                // color={}
                />
              ) : null}
            </div>
          </>
      }

    </>
  )
}

export default BasicDetails;