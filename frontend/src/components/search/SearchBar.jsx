import './SearchBar.css'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { ingredient } = useParams();

  useEffect(() => {
    if (ingredient) {
      onSearch(ingredient);
    }
  }, [ingredient]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='search-inner-form'>
      <input
        className='login-custom-placeholder'
        type="text"
        placeholder="Enter keyword to search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;



