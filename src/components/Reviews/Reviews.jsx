import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/ApiService';
import ReviewItem from 'components/ReviewItem';

import { ComponentContainer, Ul } from './Reviews.styled';

// import PropTypes from 'prop-types'

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

  return (
    <Suspense>
      <ComponentContainer>
        <Ul>
          {movieReviews.length !== 0 ? (
            movieReviews.map(reviewItem => {
              return <ReviewItem reviewItem={reviewItem} />;
            })
          ) : (
            <p>We dont have any reviews for this movie</p>
          )}
        </Ul>
      </ComponentContainer>
    </Suspense>
  );
};

// Reviews.propTypes = {

// }

export default Reviews;
