import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import defaultPhoto from 'images/comingSoon_200x300.jpg';

import PropTypes from 'prop-types';

import {
  Li,
  CardContent,
  Photo,
  Description,
  MovieTitle,
  SubTitle,
  Text,
} from './MovieSmallCard.styled';

const MovieSmallCard = ({ movie }) => {
  const { id, title, release_date, poster_path, vote_average, overview } =
    movie;

  const location = useLocation();

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  const release = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '';

  const rating = Math.round(vote_average * 10);

  return (
    <Li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <CardContent>
          <Photo src={poster} alt={title} />

          <Description>
            <MovieTitle>
              {title} {release}
            </MovieTitle>

            {vote_average !== 0 && <Text>Rating: {rating}%</Text>}

            {overview && <SubTitle>Overview: </SubTitle>}
            <Text>{overview}</Text>
          </Description>
        </CardContent>
      </Link>
    </Li>
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
