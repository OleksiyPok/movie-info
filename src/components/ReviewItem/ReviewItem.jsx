import { ComponentContainer, Author, Content } from './ReviewItem.styled';

// import PropTypes from 'prop-types'

const ReviewItem = ({ reviewItem }) => {
  const { author, content } = reviewItem;

  return (
    <ComponentContainer key={reviewItem.id}>
      <Content>{content}</Content>
      <Author>{author}</Author>
    </ComponentContainer>
  );
};

// ReviewItem.propTypes = {

// }

export default ReviewItem;
