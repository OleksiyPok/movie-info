import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import routes from 'routes';

import Home from 'pages/Home';

const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIES_ID} element={<MoviesDetails />}>
          <Route path={routes.MOVIES_CAST} element={<Cast />} />
          <Route path={routes.MOVIES_REVIEWS} element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
