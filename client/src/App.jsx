import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchNav from './SearchNav';
import SearchResults from './SearchResults';

export const AppContext = React.createContext(null);

function App() {
  // COULD SEPARATE CONTEXT INTO SEPARATE FILE
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
      <h1>The Engineer&apos;s Guide to the Garden</h1>
      <SearchBar />
      <SearchNav />
      <SearchResults />
    </AppContext.Provider>
  );
}

export default App;
