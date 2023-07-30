import { useState } from 'react';
import { Button, Input } from './SearchForm.styled';

const SearchForm = ({ getSearchQuery, prevSeachQuery }) => {
  const [searchQuery, setSearchQuery] = useState(
    prevSeachQuery !== null ? prevSeachQuery : ''
  );

  const handleOnSubmit = e => {
    e.preventDefault();

    // console.log('searchQuery:', searchQuery);
    getSearchQuery(searchQuery);
  };

  const handleOnChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        type="text"
        name="search"
        value={searchQuery}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleOnChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
