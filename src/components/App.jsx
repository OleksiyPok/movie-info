import { Route, Routes } from 'react-router-dom';
// import {
//   getTrending,
//   getSearch,
//   getDetails,
//   getCredits,
//   getReviews,
// } from 'services/ApiService';
import Layout from './Layout';
import routes from 'routes';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIES_ID} element={<MoviesDetails />}>
          <Route path={routes.MOVIES_CAST} element={<div>Cast</div>} />
          {/* <Route path={routes.MOVIES_CAST} element={<Cast />} /> */}
          {/* <Route path={routes.MOVIES_REVIEWS} element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
