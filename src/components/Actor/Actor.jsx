import defaultPhoto from 'images/comingSoon_200x300.jpg';

import { Container, Photo, Li } from './Actor.styled';

// import PropTypes from 'prop-types'

const Actor = ({ actorDetails }) => {
  const { character, name, profile_path } = actorDetails;
  const actorPhoto = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : `${defaultPhoto}`;

  return (
    <Container>
      <Li key={actorDetails.id}>
        <Photo src={actorPhoto} alt={name} />
        <p>{name}</p>
        <p>Character: {character}</p>
      </Li>
    </Container>
  );
};

// Actor.propTypes = {

// }

export default Actor;
