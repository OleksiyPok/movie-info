import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/ApiService';
import Actor from 'components/Actor';

import { ComponentContainer, CastContainer } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getData = async movieId => {
      try {
        const { cast } = await getCast(movieId);

        setMovieCast(cast);
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
        {movieCast.length !== 0 ? (
          movieCast.map(actorDetails => {
            return (
              <CastContainer>
                <Actor key={actorDetails.id} actorDetails={actorDetails} />
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
