import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AppContext } from './App';

export default function SearchBar() {
  const context = useContext(AppContext);
  const { setSearch, setSearchData } = context;

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3000/api/search/', {
      params: {
        q: event.target.searchField.value,
      },
    })
      .then(({ data }) => {
        setSearch(data.plantResults);
        setSearchData(data.searchData);
      });
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input id="searchField" type="text" autoComplete="off" placeholder="Search for plants..." />
    </form>
  );
}
