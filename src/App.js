import React from 'react';
import logo from './logo.svg';
import './App.css';
import Spritechar from './Spritechar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Crawler
      </header>
      <Spritechar />
    </div>
  );
}

export default App;
