import { ComponentContainer, Author, Content, Li } from './ReviewItem.styled';

// import PropTypes from 'prop-types'

const ReviewItem = ({ reviewItem }) => {
  const { author, content } = reviewItem;

  return (
    <ComponentContainer>
      <Li key={reviewItem.id}>
        <Content>{content}</Content>
        <Author>{author}</Author>
      </Li>
    </ComponentContainer>
  );
};

// ReviewItem.propTypes = {

// }

export default ReviewItem;
