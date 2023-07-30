import React from 'react';

import MovieSmallCard from 'components/MovieSmallCard';

import PropTypes from 'prop-types';

import { UlStyled } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <UlStyled>
      {movies.map(movie => (
        <MovieSmallCard key={movie.id} movie={movie} />
      ))}
    </UlStyled>
  );
};

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;
