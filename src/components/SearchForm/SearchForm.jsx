// import { Form } from './SearchForm.styled';

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
export default SearchForm;
