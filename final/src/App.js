import React from 'react';
import './App.css';
import Header from './components/header/header';
import MetalMeta from './MetalMeta';

function App() {
  return (
    <div className="App">

      <header className="header">
        <Header />
        <MetalMeta />
      </header>

    </div>
  );
}

export default App;
