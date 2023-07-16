import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';

import routes from 'routes';
import { getDetails } from 'services/ApiService';
import defaultPhoto from 'images/comingSoon_200x300.jpg';

import { Photo } from './MoviesDetails.styled';

// import PropTypes from 'prop-types'

const MoviesDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);

  const [movieTitle, setMovieTitle] = useState('');
  const [movieOriginalTitle, setMovieOriginalTitle] = useState();
  const [movieRelease, setMovieRelease] = useState('');
  const [moviePoster, setMoviePoster] = useState('');
  const [movieHomePage, setMovieHomePage] = useState('');
  const [movieOverview, setMovieOverview] = useState(0);

  useEffect(() => {
    const getData = async movieId => {
      try {
        // const res = await getDetails(movieId);
        // console.log('res:', res);

        const {
          title,
          original_title,
          release_date,
          poster_path,
          homepage,
          overview,
        } = await getDetails(movieId);

        setMovieTitle(title);
        setMovieOriginalTitle(original_title);
        setMovieRelease(new Date('03-07-2023').getFullYear(release_date));
        setMoviePoster(poster_path);
        setMovieHomePage(homepage);
        setMovieOverview(overview);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  const releaseYear = new Date('03-07-2023').getFullYear(movieRelease);
  const moviePhoto = moviePoster
    ? `https://image.tmdb.org/t/p/w200/${moviePoster}`
    : `${defaultPhoto}`;

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>

      <h1>Movie details</h1>

      <ul>
        <li>Title: "{movieTitle}"</li>
        <li>
          <Photo
            src={`https://image.tmdb.org/t/p/w200/${moviePhoto}`}
            alt={movieTitle}
          />
        </li>
        <li>Original name: "{movieOriginalTitle}"</li>
        <li>Realease: {releaseYear}</li>
        <li>
          Homepage:{' '}
          <a href={movieHomePage} target="_blank" rel="noreferrer">
            {movieHomePage}
          </a>
        </li>
        <li>Overview: {movieOverview}</li>

        <Link to={routes.MOVIES_CAST}>
          <button>Cast</button>
        </Link>

        <Link to={routes.MOVIES_REVIEWS}>
          <button>Reviews</button>
        </Link>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

// MoviesDetails.propTypes = {

// }

export default MoviesDetails;
