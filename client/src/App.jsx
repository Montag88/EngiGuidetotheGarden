import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchNav from './SearchNav';
// DEPENDENCY CYCLE, CAN REMOVE BY MOVING CONTEXT INTO SEPARATE FILE
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
        <Switch>
          <Route path="/search">
            {/* BETTER DESIGN HERE IS USING A SINGLE MAIN COMPONENT */}
            <SearchBar />
            <SearchNav />
            <SearchResults />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
