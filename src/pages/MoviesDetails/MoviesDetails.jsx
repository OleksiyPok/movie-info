import { useState, useEffect, Suspense } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import routes from 'routes';
import { getDetails } from 'services/ApiService';
import MovieCard from 'components/MovieCard';

import { Button, PageTitle } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async movieId => {
      try {
        const movieDetails = await getDetails(movieId);

        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <Suspense>
      <PageTitle>Movie details</PageTitle>

      <Button onClick={goBack}>Go back</Button>

      <MovieCard movieDetails={movieDetails} />

      <Button to={routes.MOVIES_CAST}>Cast</Button>
      <Button to={routes.MOVIES_REVIEWS}>Reviews</Button>

      <Suspense>
        <Outlet />
      </Suspense>
    </Suspense>
  );
};

export default MoviesDetails;
