import './App.css';

import Header from './components/header/header';
import MetalMeta from './MetalMeta';

import BandsList from './components/bandslist/bandslist'

function App() {
  return (
    <div className="App">

      <header className="header">
        <Header />
        <MetalMeta />
      </header>

      <div className='list'>
        <BandsList />
      </div>

    </div>
  );
}

export default App;
