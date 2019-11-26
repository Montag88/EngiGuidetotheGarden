import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AppContext } from './App';

function SearchBar() {
  const context = useContext(AppContext);
  const { setSearch } = context;

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3000/api/search/', {
      params: {
        q: event.target.searchField.value,
      },
    })
      .then(({ data }) => {
        setSearch(data);
      });
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input id="searchField" type="text" autoComplete="off" placeholder="Search for plants..." />
    </form>
  );
}

export default SearchBar;
