// import { Route, Routes } from 'react-router-dom';
import {
  getTrending,
  getSearch,
  getDetails,
  getCredits,
  getReviews,
} from 'services/ApiService';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MoviesDetails from 'pages/MoviesDetails';
// import Layout from './Layout';
// import routes from 'routes';
// import Cast from './Cast';
// import Reviews from './Reviews';

export const App = () => {
  const ff = async () => {
    try {
      const resp = await getSearch('chicken run');
      console.log('resp:', resp);
    } catch (error) {}
  };

  ff();

  return (
    <div>
      {/* <Routes>       */}
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<Home />} /> */}
      {/* <Route path={routes.HOME} element={<Movies />} /> */}
      {/* <Route path={routes.MOVIES_ID} element={<MoviesDetails />}>
          <Route path={routes.MOVIES_CAST} element={<Cast />} />
          <Route path={routes.MOVIES_REVIEWS} element={<Reviews />} />
        </Route> */}
      {/* </Route> */}
      {/* </Routes> */}
      ROUTES
    </div>
  );
};
