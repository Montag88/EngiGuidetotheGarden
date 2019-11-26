import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

export const AppContext = React.createContext(null);

function App() {
  const [searchState, setSearch] = useState([]);

  const appContextValue = {
    searchState, setSearch,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <h1>The Engineer&apos;s Guide to the Garden</h1>
      <SearchBar />
      <SearchResults />
    </AppContext.Provider>
  );
}

export default App;
