import { Form, Button, Input } from './SearchForm.styled';

// import PropTypes from 'prop-types'

const SearchForm = () => {
  return (
    <form>
      <Input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

// SearchForm.propTypes = {

// }

export default SearchForm;
