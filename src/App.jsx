import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import routes from 'routes';

import GlobalStyle from 'GlobalStyles';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIES_ID} element={<MoviesDetails />}>
            <Route path={routes.MOVIES_CAST} element={<Cast />} />
            <Route path={routes.MOVIES_REVIEWS} element={<Reviews />} />
            <Route path={routes.ANY} element={<Navigate to="/" replace />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
