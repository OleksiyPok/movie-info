import { Container, Author, Content } from './ReviewItem.styled';

// import PropTypes from 'prop-types'

const ReviewItem = ({ reviewItem }) => {
  const { author, content } = reviewItem;

  return (
    <Container>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Container>
  );
};

// ReviewItem.propTypes = {

// }

export default ReviewItem;
