import ReviewItem from 'components/ReviewItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/ApiService';
// import { ReviewItem } from 'components/ReviewItem';

import { Container } from './Reviews.styled';

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
  );
};
export default Reviews;

// <ul>
//   {movieReviews.map(item => {
//     return <li key={item.id}>{console.log(item)}</li>;
//   })}
// </ul>;

//  {reviewsMovie.length !== 0 ? (
//           reviewsMovie.map(review => (
//             <li key={review.id}>
//               <Author>Author: {review.author}</Author>
//               <p>{review.content}</p>
//             </li>
//           ))
//         ) : (
//           <p>We dont have any reviews for this movie</p>
//         )}
