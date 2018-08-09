import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import DogContainer from './containers/dogcontainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Navbar />
        <DogContainer />
      </div>
    );
  }
}

export default App;
