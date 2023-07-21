import defaultPhoto from 'images/comingSoon_200x300.jpg';

import {
  ComponentContainer,
  Photo,
  Description,
  MovieTitle,
  Text,
  Homepage,
  SubTitle,
} from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const {
    title,
    original_title,
    release_date,
    poster_path,
    homepage,
    overview,
    genres,
  } = movieDetails;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  const release = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '';

  const genresList = genres ? genres.map(genre => genre.name).join(', ') : '';

  return (
    <ComponentContainer>
      <Photo src={poster} alt={title} />

      <Description>
        <MovieTitle>
          {title} {release}
        </MovieTitle>

        {original_title && <Text>Original name: "{original_title}"</Text>}

        {overview && <SubTitle>Overview: </SubTitle>}
        <Text>{overview}</Text>

        {genres && <SubTitle>Genres: </SubTitle>}
        <Text>{genresList}</Text>

        {homepage && (
          <Homepage href={homepage} target="_blank" rel="noreferrer">
            {homepage}
          </Homepage>
        )}
      </Description>
    </ComponentContainer>
  );
};

export default MovieCard;
