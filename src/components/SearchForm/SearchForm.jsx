import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

import { Button, Input } from './SearchForm.styled';

const SearchForm = ({ getSearchQuery, prevSeachQuery }) => {
  const [searchQuery, setSearchQuery] = useState(
    prevSeachQuery !== null ? prevSeachQuery : ''
  );

  const handleOnSubmit = e => {
    e.preventDefault();

    getSearchQuery(searchQuery);
    if (!searchQuery) {
      toast.error(`Enter a search string`);
    }
  };

  const handleOnChange = e => {
    setSearchQuery(e.target.value);
  };

  const toastParams = {
    position: 'top-left',
    autoClose: 2000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    pauseOnHover: true,
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
      <ToastContainer {...toastParams} />
    </form>
  );
};

SearchForm.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
  prevSeachQuery: PropTypes.string,
};

export default SearchForm;
