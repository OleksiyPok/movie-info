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

const API_KEY = '4660cb84fc1f03c60267a22186b72ac0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  // include_adult: false,
  //   page: 1,
  //   // sort_by: 'popularity.desc',
  //   // with_keywords: '',
  //   // with_origin_country: '',
  //   // with_original_language: '',
  //   // with_people: '',
};

export const getTrending = async () => {
  const { data } = await axios.get(`/trending/movie/day`);

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

export const getCredits = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};

export const getReviews = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data;
};
