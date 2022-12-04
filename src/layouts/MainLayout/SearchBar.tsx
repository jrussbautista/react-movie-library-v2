import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';

type SearchBarProps = {
  onSubmitSearch(searchText: string): void;
};

const SearchBar = ({ onSubmitSearch }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText) {
      return;
    }
    onSubmitSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="tel"
          placeholder="Search Movies..."
          onChange={handleChange}
          value={searchText}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
