const routes = {
  HOME: '/', // – компонент Home, домашня сторінка зі списком популярних кінофільмів.
  MOVIES: 'movies', //– компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
  MOVIES_ID: 'movies/:movieId', // – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
  MOVIES_CAST: 'cast', //  – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
  MOVIES_REVIEWS: 'reviews', //  – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
  ANY: '*',
};

export default routes;
