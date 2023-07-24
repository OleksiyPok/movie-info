import { useState, useEffect, Suspense } from 'react';
// import SearchForm from 'components/SearchForm';
import { getSearch } from 'services/ApiService';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

import { PageTitle } from './Movies.styled';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');

  const handlerOnSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;

    if (searchQuery === '') {
      return setSearchParams({});
    }

    setSearchParams({ search: searchQuery });
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
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          name="search"
          defaultValue={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {/* <SearchForm getSearchQuery={handlerOnSubmit} /> */}
      <MovieList movies={searchResults} />
    </Suspense>
  );
};

export default Movies;
