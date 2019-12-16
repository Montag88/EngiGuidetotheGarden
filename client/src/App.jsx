import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import NavBar from './NavBar';

export const AppContext = React.createContext(null);

export default function App() {
  const [searchState, setSearch] = useState([]);
  const [searchDataState, setSearchData] = useState({});

  const appContextValue = {
    searchState,
    setSearch,
    searchDataState,
    setSearchData,
  };

  // when search state changes, route path to /search


  return (
    <AppContext.Provider value={appContextValue}>
      <Router>
        <h1>The Engineer&apos;s Guide to the Garden</h1>
        <NavBar />
        <SearchBar />
        <Switch>
          <Route exact path="/search" render={() => <SearchResults />} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
