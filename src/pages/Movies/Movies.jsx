import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearch } from 'services/ApiService';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

import { PageTitle } from './Movies.styled';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [searchResults, setSearchResults] = useState([]);

  const handleOnSubmit = searchQuery => {
    const params = searchQuery !== '' ? { search: searchQuery } : {};
    setSearchParams(params);
  };

  const searchQuery = searchParams.get('search');

  useEffect(() => {
    setLoading(true);
    const getData = async searchQuery => {
      try {
        const { results } = await getSearch(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData(searchQuery);
  }, [searchQuery]);

  return (
    <Suspense>
      {loading && <Loader />}
      <PageTitle>Movie search</PageTitle>

      <SearchForm
        getSearchQuery={handleOnSubmit}
        prevSeachQuery={searchQuery}
      />
      <MovieList movies={searchResults} />
    </Suspense>
  );
};

export default Movies;
