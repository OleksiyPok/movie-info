import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrending } from 'services/ApiService';

const Movies = () => {
  const [gallery, setGallery] = useState([]);
  const [galleryPage, setGalleryPage] = useState(1);

  useEffect(() => {
    const getData = async period => {
      try {
        const { results, page } = await getTrending(period);

        setGallery(results);
        setGalleryPage(page);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData('day');
    // getData('week');
  }, []);

  return (
    <ul>
      {gallery.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Movies;
