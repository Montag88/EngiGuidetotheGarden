import React from 'react';

const AppContext = React.createContext(null);

function App() {
  return (
    <AppContext.Provider>
      <div>HELLO WORLD</div>
    </AppContext.Provider>
  );
}

export default App;
