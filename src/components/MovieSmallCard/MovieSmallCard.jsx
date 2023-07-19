import React from 'react';
// import { Link } from 'react-router-dom';

import defaultPhoto from 'images/comingSoon_200x300.jpg';

import {
  ComponentContainer,
  Photo,
  Description,
  MovieTitle,
  SubTitle,
  Text,
} from './MovieSmallCard.styled';

// import PropTypes from 'prop-types';

const MovieSmallCard = ({ movie }) => {
  const { id, title, release_date, poster_path, overview } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  const release = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '';

  return (
    <ComponentContainer to={`/movies/${id}`}>
      <Photo src={poster} alt={title} />

      <Description>
        <MovieTitle>
          {title} {release}
        </MovieTitle>
        {overview && <SubTitle>Overview: </SubTitle>}
        <Text>{overview}</Text>
      </Description>
    </ComponentContainer>
  );
};

// MovieSmallCard.propTypes = {};

export default MovieSmallCard;
