import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/ApiService';

import { PageTitle } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async period => {
      try {
        setLoading(true);
        const { results } = await getTrending(period);

        setTrendMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData('day');
  }, []);

  return (
    <>
      {loading && <Loader />}
      <PageTitle>Most popular of the day</PageTitle>
      <MovieList movies={trendMovies} />
    </>
  );
};

export default Home;
