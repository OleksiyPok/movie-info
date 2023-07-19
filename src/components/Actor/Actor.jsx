import defaultPhoto from 'images/comingSoon_200x300.jpg';

import { ComponentContainer, Photo, SubTitle, Text } from './Actor.styled';

// import PropTypes from 'prop-types'

const Actor = ({ actorDetails }) => {
  const { character, name, profile_path } = actorDetails;
  const actorPhoto = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : `${defaultPhoto}`;

  return (
    <ComponentContainer key={actorDetails.id}>
      <Photo src={actorPhoto} alt={name} />

      <SubTitle>{name}</SubTitle>
      <Text>{character}</Text>
    </ComponentContainer>
  );
};

// Actor.propTypes = {

// }

export default Actor;
