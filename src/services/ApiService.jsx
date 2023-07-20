import axios from 'axios';
// const axios = require('axios');

// examples
// `https://themoviedb.org/3/trending/movie/day?api_key=4660cb84fc1f03c60267a22186b72ac0`
// `https://api.themoviedb.org/3/trending/movie/day?api_key=4660cb84fc1f03c60267a22186b72ac0`
// `https://api.themoviedb.org/3/movie/157336?api_key=4660cb84fc1f03c60267a22186b72ac0`

// https://api.themoviedb.org/3/trending/movie/{time_window}
// https://api.themoviedb.org/3/search/movie
// https://api.themoviedb.org/3/movie/{movie_id}
// https://api.themoviedb.org/3/movie/{movie_id}/credits
// https://api.themoviedb.org/3/movie/{movie_id}/reviews

// https://image.tmdb.org/t/p/w200/{profile_path}

const API_KEY = '4660cb84fc1f03c60267a22186b72ac0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  page: 1,
};

export const getTrending = async (period = 'day') => {
  const { data } = await axios.get(`/trending/movie/${period}`);

  return data;
};

export const getSearch = async query => {
  const params = {
    query,
  };

  const { data } = await axios.get(`/search/movie`, { params });

  return data;
};

export const getDetails = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);

  return data;
};

export const getCast = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);

  return data;
};

export const getReviews = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);

  return data;
};
