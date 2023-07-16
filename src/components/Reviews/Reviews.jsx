import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/ApiService';
import ReviewItem from 'components/ReviewItem';

import { Container } from './Reviews.styled';

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
      <Container>
        <ul>
          {movieReviews.length !== 0 ? (
            movieReviews.map(reviewItem => {
              return (
                <li key={reviewItem.id}>
                  <ReviewItem reviewItem={reviewItem} />
                </li>
              );
            })
          ) : (
            <p>We dont have any reviews for this movie</p>
          )}
        </ul>
      </Container>
    </Suspense>
  );
};

// Reviews.propTypes = {

// }

export default Reviews;
