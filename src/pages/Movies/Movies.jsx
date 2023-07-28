import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import { getSearch } from 'services/ApiService';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

import { PageTitle } from './Movies.styled';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [searchResults, setSearchResults] = useState([]);

  // const location = useLocation();
  // console.log('location:', location);

  const handleOnSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;

    if (searchQuery === '') {
      return setSearchParams({});
    }

    setSearchParams({ search: searchQuery });
    e.target.reset();
  };

  const searchQuery = searchParams.get('search') ?? '';

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
      {/* <form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          name="search"
          defaultValue={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">Search</Button>
      </form> */}
      <SearchForm getSearchQuery={handleOnSubmit} />
      <MovieList movies={searchResults} />
    </Suspense>
  );
};

export default Movies;
