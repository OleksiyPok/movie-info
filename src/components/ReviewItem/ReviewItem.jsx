import { Container, Author, Content, Li } from './ReviewItem.styled';

// import PropTypes from 'prop-types'

const ReviewItem = ({ reviewItem }) => {
  const { author, content } = reviewItem;

  return (
    <Container>
      <Li key={reviewItem.id}>
        <Author>{author}</Author>
        <Content>{content}</Content>
      </Li>
    </Container>
  );
};

// ReviewItem.propTypes = {

// }

export default ReviewItem;
