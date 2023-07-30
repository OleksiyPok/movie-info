import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import routes from 'routes';
import { getDetails } from 'services/ApiService';
import MovieCard from 'components/MovieCard';
import Loader from 'components/Loader';

import { Button, PageTitle } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async movieId => {
      try {
        setLoading(true);
        const movieDetails = await getDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <Suspense>
      {loading && <Loader />}
      <PageTitle>Movie details</PageTitle>

      <Button to={backLink.current}>Go back</Button>

      {Object.keys(movieDetails).length !== 0 && (
        <MovieCard movieDetails={movieDetails} />
      )}

      <Button to={routes.MOVIES_CAST}>Cast</Button>
      <Button to={routes.MOVIES_REVIEWS}>Reviews</Button>
      <Suspense>
        <Outlet />
      </Suspense>
    </Suspense>
  );
};

export default MoviesDetails;
