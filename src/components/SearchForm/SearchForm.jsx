import { Button, Input } from './SearchForm.styled';

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

export default SearchForm;
