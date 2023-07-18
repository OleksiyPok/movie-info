import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getDetails } from 'services/ApiService';

import defaultPhoto from 'images/comingSoon_200x300.jpg';

import {
  ComponentContainer,
  Photo,
  Description,
  MovieTitle,
  Text,
  Span,
  Homepage,
  SubTitle,
} from './MovieCard.styled';

// import PropTypes from 'prop-types';

const MovieCard = props => {
  const { movieId } = useParams();
  const [movieTitle, setMovieTitle] = useState('');
  const [movieRelease, setMovieRelease] = useState('');
  const [movieOriginalTitle, setMovieOriginalTitle] = useState();
  const [moviePoster, setMoviePoster] = useState('');
  const [movieOverview, setMovieOverview] = useState(0);
  const [movieGenres, setMovieGenres] = useState('');
  const [movieHomePage, setMovieHomePage] = useState('');

  useEffect(() => {
    const getData = async movieId => {
      try {
        const {
          title,
          original_title,
          release_date,
          poster_path,
          homepage,
          overview,
          genres,
        } = await getDetails(movieId);

        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w200/${poster_path}`
          : defaultPhoto;

        const release = release_date
          ? `(${new Date(release_date).getFullYear()})`
          : '';

        const genresList = genres
          ? genres.map(genre => genre.name).join(', ')
          : '';

        setMovieTitle(title);
        setMovieOriginalTitle(original_title);
        setMovieRelease(release);
        setMoviePoster(poster);
        setMovieHomePage(homepage);
        setMovieOverview(overview);
        setMovieGenres(genresList);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <ComponentContainer>
      <Photo src={moviePoster} alt={movieTitle} />

      <Description>
        <MovieTitle>
          {movieTitle} {movieRelease}
        </MovieTitle>

        <Text>
          Original name: <Span>"{movieOriginalTitle}"</Span>
        </Text>

        {movieOverview && <SubTitle>Overview: </SubTitle>}
        {movieOverview && <Text>{movieOverview}</Text>}

        {movieGenres && <SubTitle>Genres: </SubTitle>}
        {movieGenres && <Text>{movieGenres}</Text>}

        <Homepage>
          <a href={movieHomePage} target="_blank" rel="noreferrer">
            {movieHomePage}
          </a>
        </Homepage>
      </Description>
    </ComponentContainer>
  );
};

// MovieCard.propTypes = {};

export default MovieCard;
