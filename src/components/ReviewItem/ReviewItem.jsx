import PropTypes from 'prop-types';

import { ComponentContainer, Author, Content } from './ReviewItem.styled';

const ReviewItem = ({ reviewItem }) => {
  const { author, content } = reviewItem;

  return (
    <ComponentContainer>
      <Content>{content}</Content>
      <Author>{author}</Author>
    </ComponentContainer>
  );
};

ReviewItem.propTypes = {
  reviewItem: PropTypes.object,
};

export default ReviewItem;
