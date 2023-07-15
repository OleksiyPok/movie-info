import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

// MovieList.propTypes = {

// }

export default MovieList;
