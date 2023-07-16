import React from 'react';
import { Link } from 'react-router-dom';

import defaultPhoto from 'images/comingSoon_200x300.jpg';

import { Photo } from './MovieList.styled';

// import PropTypes from 'prop-types'

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const releaseYear = new Date('03-07-2023').getFullYear(
          movie.release_date
        );

        const moviePhoto = movie.poster_path
          ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
          : `${defaultPhoto}`;

        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Photo
                src={`https://image.tmdb.org/t/p/w200/${moviePhoto}`}
                alt={movie.title}
              />
              <p>Title: {movie.title}</p>
              <p>{releaseYear}</p>
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
