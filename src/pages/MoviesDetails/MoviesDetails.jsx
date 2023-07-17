import { Suspense } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import routes from 'routes';

import MovieCard from 'components/MovieCard';
import { PageTitle, Button } from './MoviesDetails.styled';

// import PropTypes from 'prop-types'

const MoviesDetails = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  // const goForward = () => navigate(1);

  console.log('navigate:', navigate);
  return (
    <>
      <PageTitle>Movie details</PageTitle>

      <Button onClick={goBack}>Go back</Button>
      {/* <Button onClick={goForward}>Go forward</Button> */}

      <MovieCard />

      <Link to={routes.MOVIES_CAST}>
        <button>Cast</button>
      </Link>

      <Link to={routes.MOVIES_REVIEWS}>
        <button>Reviews</button>
      </Link>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

// MoviesDetails.propTypes = {

// }

export default MoviesDetails;
