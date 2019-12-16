import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import SearchNav from './SearchNav';
import SearchArticles from './SearchArticles';
import { AppContext } from './App';

export default function SearchResults() {
  const context = useContext(AppContext);
  const { setSearch, setSearchData } = context;

  const location = useLocation();

  const searchForPlants = () => {
    const query = queryString.parse(location.search);
    axios.get('http://localhost:3000/api/search/', {
      params: {
        q: query.q,
        pageNumber: query.page,
      },
    })
      .then(({ data }) => {
        setSearch(data.plantResults);
        setSearchData(data.searchData);
      });
  };

  useEffect(() => {
    searchForPlants();
  }, [location]);

  return (
    <>
      <SearchNav />
      <SearchArticles />
    </>
  );
}
