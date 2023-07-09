import axios from 'axios';
// const axios = require('axios');

// example
// https://api.themoviedb.org/3/movie/157336?api_key=4660cb84fc1f03c60267a22186b72ac0

const BASE_URL = 'themoviedb.org/3/';
const API_KEY = '4660cb84fc1f03c60267a22186b72ac0';

const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const IMAGES_PER_PAGE = 12;

export const getData = async (searchQuery, page) => {
  const params = [];
  const options = {
    key: API_KEY,
    q: searchQuery,
    image_type: IMAGE_TYPE,
    orientation: ORIENTATION,
    safesearch: SAFESEARCH,
    page: page,
    per_page: IMAGES_PER_PAGE,
  };

  Object.entries(options).forEach(([key, value]) => {
    if (value) params.push(`${key}=${value}`);
  });

  const PARAMS = params.join('&');
  //   const FULL_REQEST = BASE_URL + '?' + PARAMS;

  let FULL_REQEST = `https://api.themoviedb.org/3/movie?api_key=${API_KEY}`;
  FULL_REQEST = `https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=${API_KEY}`;

  const response = await axios.get(FULL_REQEST);
  console.log('response:', response.data);

  return response.data;
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjYwY2I4NGZjMWYwM2M2MDI2N2EyMjE4NmI3MmFjMCIsInN1YiI6IjY0YTUxY2U5NWE5OTE1MDBlM2M4NDc5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.itgJnUfyZ7PWEwJTqR3A8R9Hg70ByQZEXhtRKwrRWqc',
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
