import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/ApiService';
import Actor from 'components/Actor';

import { Container, Ul } from './Cast.styled';

// import PropTypes from 'prop-types'

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

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

  return (
    <>
      <Container>
        <Ul>
          {movieCast.map(actorDetails => {
            return <Actor actorDetails={actorDetails} />;
          })}
        </Ul>
      </Container>
    </>
  );
};

// Cast.propTypes = {

// }

export default Cast;
