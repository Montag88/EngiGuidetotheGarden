import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
  const history = useHistory();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = {
      q: event.target.searchField.value,
      page: 1,
    };
    history.push(`/search?${queryString.stringify(query)}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input id="searchField" type="text" autoComplete="off" placeholder="Search for plants..." />
    </form>
  );
}
