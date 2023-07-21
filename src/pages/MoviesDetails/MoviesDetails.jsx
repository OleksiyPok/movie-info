import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import routes from 'routes';

import MovieCard from 'components/MovieCard';
import { Button, PageTitle } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Suspense>
      <PageTitle>Movie details</PageTitle>

      <Button onClick={goBack}>Go back</Button>

      <MovieCard />

      <Button to={routes.MOVIES_CAST}>Cast</Button>
      <Button to={routes.MOVIES_REVIEWS}>Reviews</Button>

      <Suspense>
        <Outlet />
      </Suspense>
    </Suspense>
  );
};

export default MoviesDetails;
