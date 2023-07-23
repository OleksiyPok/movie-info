import React from 'react';
import { useLocation } from 'react-router-dom';

import defaultPhoto from 'images/comingSoon_200x300.jpg';

import PropTypes from 'prop-types';

import {
  LinkToMovie,
  Photo,
  Description,
  MovieTitle,
  SubTitle,
  Text,
} from './MovieSmallCard.styled';

const MovieSmallCard = ({ movie }) => {
  const { id, title, release_date, poster_path, overview } = movie;

  const location = useLocation();

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  const release = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '';

  return (
    <LinkToMovie to={`/movies/${id}`} state={{ from: location }}>
      <Photo src={poster} alt={title} />

      <Description>
        <MovieTitle>
          {title} {release}
        </MovieTitle>
        {overview && <SubTitle>Overview: </SubTitle>}
        <Text>{overview}</Text>
      </Description>
    </LinkToMovie>
  );
};

MovieSmallCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
};

export default MovieSmallCard;
