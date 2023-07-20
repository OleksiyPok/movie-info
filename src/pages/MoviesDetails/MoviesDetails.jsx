import { Suspense } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import routes from 'routes';

import MovieCard from 'components/MovieCard';
import { PageTitle, Button } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Suspense>
      <PageTitle>Movie details</PageTitle>

      <Button onClick={goBack}>Go back</Button>

      <MovieCard />

      <Link to={routes.MOVIES_CAST}>
        <Button>Cast</Button>
      </Link>

      <Link to={routes.MOVIES_REVIEWS}>
        <Button>Reviews</Button>
      </Link>

      <Suspense>
        <Outlet />
      </Suspense>
    </Suspense>
  );
};

export default MoviesDetails;
