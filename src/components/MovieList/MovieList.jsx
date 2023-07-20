import React from 'react';

import MovieSmallCard from 'components/MovieSmallCard';

import PropTypes from 'prop-types';

import { ComponentContainer } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <ComponentContainer>
      {movies.map(movie => (
        <MovieSmallCard key={movie.id} movie={movie} />
      ))}
    </ComponentContainer>
  );
};

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;
