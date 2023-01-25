import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from 'next/image'

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

// Import all actions and bind them
// import { getMovieData } from "../../state/actions/movie";
import { getMovieData } from "../../state/actions/movie";

const MovieDetails: React.FC = () => {
  const movieData = useSelector((state: any) => state?.movie.movieData);
  const dispatch = useDispatch();

  const request = {
    method: 'GET',
    url: 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0078748/',
    headers: {
      'X-RapidAPI-Key': '4de60a9b92msh66dea4095a28b15p1ba9fajsnefbb67e4f064',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };

  const fetcFavouriteMovies = async () => {
    await axios.request(request).then((response) => {
      dispatch(getMovieData(response.data))
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    fetcFavouriteMovies()
  }, [])

  return (
    <>
      <div className="text-neutral-900 dark:text-white mb-8">
        {/* <div>Guess my favourite film based on this plot</div> */}
        <div className="font-bold">
          {movieData?.results.title}&nbsp;-&nbsp;
          {movieData?.results.year}
        </div>
        {movieData?.results.plot}
      </div>
    </>
  )
}

export default MovieDetails;