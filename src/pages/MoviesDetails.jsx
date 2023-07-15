import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import routes from 'routes';
import { getDetails } from 'services/ApiService';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);

  const [movieTitle, setMovieTitle] = useState('');
  const [movieOriginalTitle, setMovieOriginalTitle] = useState();
  const [movieHomePage, setMovieHomePage] = useState('');
  const [movieOverview, setMovieOverview] = useState(0);

  useEffect(() => {
    const getData = async movieId => {
      try {
        const { title, original_title, homepage, overview } = await getDetails(
          movieId
        );

        setMovieTitle(title);
        setMovieOriginalTitle(original_title);
        setMovieHomePage(homepage);
        setMovieOverview(overview);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <Suspense>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>

      <h1>Movie details</h1>

      <ul>
        <li>Title: {movieTitle}</li>
        <li>Original name: {movieOriginalTitle}</li>
        <li>Homepage: {movieHomePage}</li>
        <li>{movieOverview}</li>

        <Link to={routes.MOVIES_CAST}>
          <button>Cast</button>
        </Link>

        <Link to={routes.MOVIES_REVIEWS}>
          <button>Reviews</button>
        </Link>
      </ul>
      <Outlet />
    </Suspense>
  );
};

export default MoviesDetails;
