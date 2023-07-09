import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {}, []);
  console.log('movieId:', movieId);
  return <>MoviesDetails: {movieId}</>;
};
export default MoviesDetails;
