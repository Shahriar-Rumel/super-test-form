import { Suspense, useState } from 'react';
import './App.css';
import Router from './routes';
import { HeaderContext } from './modules/hooks/HeaderContext';

function App() {
  const [page, setPage] = useState('Initial Info');

  const contextValue = {
    page,
    setPage
  };
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <HeaderContext.Provider value={contextValue}>
        <Router />
      </HeaderContext.Provider>
    </Suspense>
  );
}

export default App;
