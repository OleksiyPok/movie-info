import axios from 'axios';
// const axios = require('axios');

// example
// https://api.themoviedb.org/3/movie/157336?api_key=4660cb84fc1f03c60267a22186b72ac0

const API_KEY = '4660cb84fc1f03c60267a22186b72ac0';

axios.defaults.baseURL = 'https://themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  include_adult: false,
  page: 1,
  sort_by: 'popularity.desc',
  with_keywords: '',
  with_origin_country: '',
  with_original_language: '',
  with_people: '',
};

// const defaultOptions = {
// api_key: API_KEY,
// include_adult: false,
// page: 1,
// sort_by: 'popularity.desc',
// with_keywords: '',
// with_origin_country: '',
// with_original_language: '',
// with_people: '',
// };

// const FULL_REQEST = `https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=${API_KEY}`;

export const getTrending = async () => {
  const response = await axios.get('/trending/movie/day');
  console.log('response:', response);
  //   return response.data;
};

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjYwY2I4NGZjMWYwM2M2MDI2N2EyMjE4NmI3MmFjMCIsInN1YiI6IjY0YTUxY2U5NWE5OTE1MDBlM2M4NDc5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.itgJnUfyZ7PWEwJTqR3A8R9Hg70ByQZEXhtRKwrRWqc',
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

// const fetch = require('node-fetch');

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
