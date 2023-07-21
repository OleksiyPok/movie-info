import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/ApiService';
import ReviewItem from 'components/ReviewItem';

import { ComponentContainer } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState('');

  useEffect(() => {
    const getData = async movieId => {
      try {
        const { results } = await getReviews(movieId);

        setMovieReviews(results);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <Suspense>
      <ComponentContainer>
        {movieReviews.length !== 0 ? (
          movieReviews.map(reviewItem => {
            return <ReviewItem key={reviewItem.id} reviewItem={reviewItem} />;
          })
        ) : (
          <p>We dont have any reviews for this movie</p>
        )}
      </ComponentContainer>
    </Suspense>
  );
};

export default Reviews;
