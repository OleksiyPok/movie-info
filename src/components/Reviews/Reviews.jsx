import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/ApiService';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState('');

  useEffect(() => {
    const getData = async movieId => {
      try {
        const { results } = await getReviews(movieId);

        setMovieReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  console.log('movieReviews:', movieReviews);

  return <div>Reviews {movieId} </div>;
};
export default Reviews;
