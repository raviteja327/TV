import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import Main from '../src/components/Main';

class App extends Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>Tv Series</h1>
        <img src={logo} className="App-logo" alt="logo" />
       <Main/>
      </header>
    </div>
  );
}
}

export default App;
