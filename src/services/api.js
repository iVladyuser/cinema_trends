import axios from 'axios';

const KEY = '7717fd5330fce9326df9ad18aa597ac1';
const URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingFilms = async endPoint => {
  const url = `${URL}${endPoint}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchSearchFilm = async (endPoint, query) => {
  const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
};
