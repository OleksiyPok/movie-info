import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/ApiService';
import Actor from 'components/Actor';
import Loader from 'components/Loader';

import { ComponentContainer, CastContainer } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async movieId => {
      try {
        setLoading(true);
        const { cast } = await getCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData(movieId);
  }, [movieId]);

  // console.log('movieCast:', movieCast);

  return (
    <Suspense>
      <ComponentContainer>
        {loading && <Loader />}
        {movieCast.length !== 0 ? (
          movieCast.map(actorDetails => {
            return (
              <CastContainer key={actorDetails.id}>
                <Actor actorDetails={actorDetails} />
              </CastContainer>
            );
          })
        ) : (
          <p>We dont have any information about cast for this movie</p>
        )}
      </ComponentContainer>
    </Suspense>
  );
};

export default Cast;
