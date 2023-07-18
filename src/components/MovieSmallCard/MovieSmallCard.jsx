import React from 'react';
// import { Link } from 'react-router-dom';

import defaultPhoto from 'images/comingSoon_200x300.jpg';

import {
  ComponentContainer,
  LinkToMovie,
  Photo,
  Description,
  MovieTitle,
  SubTitle,
  Text,
  //   Span,
  //   Homepage,
} from './MovieSmallCard.styled';

// import PropTypes from 'prop-types';

const MovieSmallCard = ({ movie }) => {
  //   console.log('movie:', movie);

  const {
    id,
    title,
    release_date,
    poster_path,
    overview,
    // genres
  } = movie;
  //   console.log('title:', title);

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  const release = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '';

  return (
    <ComponentContainer>
      <LinkToMovie to={`/movies/${id}`}>
        <Photo src={poster} alt={title} />

        <Description>
          <MovieTitle>
            {title} {release}
          </MovieTitle>
          <SubTitle>Overview: </SubTitle>
          <Text>{overview}</Text>
        </Description>
      </LinkToMovie>
    </ComponentContainer>
  );
};

// MovieSmallCard.propTypes = {};

export default MovieSmallCard;
