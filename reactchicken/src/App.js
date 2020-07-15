import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chicken from './Chicken.js'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <Chicken />
    </div>
  );
}

export default App;
