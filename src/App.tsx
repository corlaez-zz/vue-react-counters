import React from 'react';
import './App.css';
import ReactCounter from './react/ReactCounter';
import './vue/VueCounter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ReactCounter/>
      </header>
    </div>
  );
}

export default App;
