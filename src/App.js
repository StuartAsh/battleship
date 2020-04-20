import React from 'react';
import './App.css';
import './battleship.css';
import Game from './components/Game';

// Exercise
// https://gist.github.com/dbraga/8209ae72ac74a330fe0c9e7a94a5ca7e

/*

Carrier, size 5
Battleship, size 4
Destroyer, size 3
Submarine, size 3
Patrol Boat, size 2

*/

function App() {
  return (
    <Game />
  );
}

export default App;
