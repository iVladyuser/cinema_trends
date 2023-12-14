import axios from 'axios';

const KEY = '7717fd5330fce9326df9ad18aa597ac1';
const URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async endPoint => {
  const url = `${URL}${endPoint}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchSearchMovie = async (endPoint, query) => {
  const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieDetails = async (endPoint, movieId) => {
  const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieCast = async (endPoint, movieId) => {
  const url = `${URL}${endPoint}/${movieId}/credits?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieReviews = async movie_id => {
  const params = {
    api_key: KEY,
    language: 'en-US',
  };
  const response = await axios.get(`${URL}movie/${movie_id}/reviews`, {
    params,
  });
  return response.data.results;
};
