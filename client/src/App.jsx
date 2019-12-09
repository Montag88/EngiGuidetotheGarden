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

  return (
    <AppContext.Provider value={appContextValue}>
      <Router>
        <h1>The Engineer&apos;s Guide to the Garden</h1>
        <NavBar />
        <SearchBar />
        <Switch>
          <Route path="/search">
            <SearchResults />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
