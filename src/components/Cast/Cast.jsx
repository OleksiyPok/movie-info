import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/ApiService';
import Actor from 'components/Actor';
import Loader from 'components/Loader';

import { CastContainer } from './Cast.styled';
// import { ComponentContainer } from 'components/Reuseble/CommonStyleComponents';

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

  return (
    <Suspense>
      {loading && <Loader />}
      {movieCast.length !== 0 ? (
        <CastContainer color="green">
          {movieCast.map(actorDetails => {
            return <Actor key={actorDetails.id} actorDetails={actorDetails} />;
          })}
        </CastContainer>
      ) : (
        <p>We dont have any information about cast for this movie</p>
      )}
    </Suspense>
  );
};

export default Cast;
