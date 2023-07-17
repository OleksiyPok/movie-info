import { useState, useEffect, Suspense } from 'react';
import SearchForm from 'components/SearchForm';
import { getSearch } from 'services/ApiService';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList';

import { PageTitle } from './Movies.styled';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  useEffect(() => {
    const getData = async searchQuery => {
      try {
        const { results } = await getSearch(searchQuery);

        setSearchResults(results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(query);
  }, [query]);

  return (
    <Suspense>
      <PageTitle>Movie search</PageTitle>
      <SearchForm />
      <MovieList movies={searchResults} />
    </Suspense>
  );
};

export default Movies;
