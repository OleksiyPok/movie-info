// import { Form } from './SearchForm.styled';

// import PropTypes from 'prop-types'

const SearchForm = () => {
  return (
    <form>
      <input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

// SearchForm.propTypes = {

// }

export default SearchForm;
