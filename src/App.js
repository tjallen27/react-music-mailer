import React, { Component } from 'react';

import Header from './components/Header';
import Player from './components/MusicPlayer';
import Plans from './components/Plans';
import Info from './components/Info';
import Footer from './components/Footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Player />
        <Info />
        <Plans />
        <Footer />
      </div>
    );
  }
}

export default App;
