import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import routes from 'routes';
import { getDetails } from 'services/ApiService';

const MoviesDetails = () => {
  const { movieId } = useParams();

  const [movieTitle, setMovieTitle] = useState('');
  const [movieOriginalTitle, setMovieOriginalTitle] = useState();
  const [movieHomePage, setMovieHomePage] = useState('');
  const [movieGenres, setMovieGenres] = useState('');
  const [movieOverview, setMovieOverview] = useState(0);

  useEffect(() => {
    const getData = async movieId => {
      try {
        const { title, original_title, homepage, genre, overview } =
          await getDetails(movieId);

        setMovieTitle(title);
        setMovieOriginalTitle(original_title);
        setMovieHomePage(homepage);
        // setMovieGenres(genre);
        setMovieOverview(overview);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <>
      <ul>
        <li>Title: {movieTitle}</li>
        <li>Original name: {movieOriginalTitle}</li>
        <li>Homepage: {movieHomePage}</li>
        {/* <li>{movieGenres}</li> */}
        <li>{movieOverview}</li>
        <li>
          <Link to={routes.MOVIES_CAST}>Cast</Link>
        </li>
        <li>
          <Link to={routes.MOVIES_REVIEWS}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
