import { useSearchParams } from 'react-router-dom';
import { Button, Input } from './SearchForm.styled';

const SearchForm = ({ handlerOnSubmit }) => {
  const [searchParams] = useSearchParams('');
  const searchQuery = searchParams.get('search') ?? '';

  return (
    <form onSubmit={handlerOnSubmit}>
      <Input
        type="text"
        name="search"
        defaultValue={searchQuery}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
