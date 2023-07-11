import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/ApiService';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState('');

  useEffect(() => {
    const getData = async movieId => {
      try {
        const { cast } = await getCast(movieId);

        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  console.log('movieCast:', movieCast);

  return <div>{/* Cast {movieId} {movieCast} */}</div>;
};
export default Cast;
