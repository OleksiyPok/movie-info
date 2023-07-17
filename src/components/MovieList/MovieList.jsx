import React from 'react';
import { Link } from 'react-router-dom';

import defaultPhoto from 'images/comingSoon_200x300.jpg';

import { Photo } from './MovieList.styled';

// import PropTypes from 'prop-types'

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const releaseYear = movie.release_date
          ? new Date(movie.release_date).getFullYear()
          : 'Unknown';

        const moviePhoto = movie.poster_path
          ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
          : `${defaultPhoto}`;

        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Photo src={moviePhoto} alt={movie.title} />
              <p>Title: {movie.title}</p>
              <p>ReleaseYear: {releaseYear}</p>
              <p>Overview: {movie.overview}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// MovieList.propTypes = {

// }

export default MovieList;
