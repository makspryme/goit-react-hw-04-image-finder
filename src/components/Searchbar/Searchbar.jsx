import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/search-svgrepo-com.svg';

export default function Searchbar({ onSubmit }) {
  const [input, setInput] = useState('');

  function handleInputValue(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <SearchIcon width="20" height="20" />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          value={input}
          onChange={handleInputValue}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
