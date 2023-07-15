import { Container, Author, Content } from './ReviewItem.styled';

const ReviewItem = ({ reviewItem }) => {
  const { author, content } = reviewItem;

  return (
    <Container>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Container>
  );
};
export default ReviewItem;
