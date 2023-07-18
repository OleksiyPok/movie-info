import React from 'react';

import MovieSmallCard from 'components/MovieSmallCard';

import { ComponentContainer } from './MovieList.styled';

// import PropTypes from 'prop-types'

const MovieList = ({ movies }) => {
  return (
    <ComponentContainer>
      {movies.map(movie => (
        <MovieSmallCard key={movie.id} movie={movie} />
      ))}
    </ComponentContainer>
  );
};

// MovieList.propTypes = {

// }

export default MovieList;
