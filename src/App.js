import React, { Component } from 'react';
import Player from './Player';
import Modal from'./Modal';
import './App.css';
import './Player.css'


class App extends Component {

  render() {
    return (
      <div className="App">
      
      <Player
          player='Player 1 PRESS START'
          name='Zangief'
          year='1 juin 1956'
          image="https://giffiles.alphacoders.com/131/13197.gif" alt="Card image cap"
          />

        <Player
           player='Player 2 PRESS START'
           name='Alex'
           year='3 août 1965'
           image="https://giffiles.alphacoders.com/132/13200.gif" alt="Card image cap"
           />

      </div>
    );
  }
}

export default App;
