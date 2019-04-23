import React from 'react';
import logo from './logo.svg';
import './App.css';
import Spritechar from './Spritechar';

class App extends React.Component {
  
  render(){
    state = {x: 1, y: 1, health: 20}
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Crawler
      </header>
      <Spritechar {...state}/>
    </div>
  );
}
}

export default App;
