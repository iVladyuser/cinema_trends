import { BiSearch } from 'react-icons/bi';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

const Searchbar = ({ onSubmitSearchBar }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    onSubmitSearchBar(searchValue);
  };
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <BiSearch style={{ margin: 10, height: 20, width: 20 }} />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search films..."
        ></SearchFormInput>
      </SearchForm>
    </SearchbarHeader>
  )
};

export default Searchbar;

