import React, { useState, useEffect } from 'react';
import '../App.css';
import '../battleship.css';

function GridTitle(props) {
  const [playerNum, setPlayerNum] = useState('1');
  const [winMessage, setWinMessage] = useState('');
  const [p2MovesIndex, setP2MovesIndex] = useState(0);
  const {turn,fireShots,grid1Shots,grid2Shots} = props;

  const player2Moves = ["H10", "C7", "D10", "H2", "I4", "E8", "G4", "J3", "D6", "B9", "G9", "J10", "F8", "B8", "G6", "A4", "D9", "I9", "I8", "E1", "D7", "B5", "H6", "H1", "F2", "E2", "F1", "C10", "J1", "B6", "H8", "F3", "H3", "B1", "J6", "D4", "A5", "H5", "E4", "A7", "D5", "C2", "C5", "J5", "J9", "J8", "G3", "F4", "C1", "B10", "D8", "H9", "C9", "C6", "G10", "A1", "A2", "F5", "H4", "I10", "C3", "J7", "I1", "H7", "I3", "I2", "J2", "C8", "F7", "A10", "E10", "E6", "A8", "E3", "B7", "D1", "F9", "F10", "D3", "A6", "B2", "I6", "G7", "G2", "G5", "E9", "E5", "B4", "D2", "J4", "C4", "I7", "G8", "G1", "A3", "F6", "I5", "A9", "B3", "E7"];

  useEffect(() => {
    let p1Hits = grid1Shots.filter((c) => c.isHit === true);
    let p2Hits = grid2Shots.filter((c) => c.isHit === true);
    if(p1Hits.length === 17) setWinMessage("Player 1 Wins");
    if(p2Hits.length === 17) setWinMessage("Player 2 Wins");

    if(turn === 'p1') {
      setPlayerNum('1');
      console.log("player1");
    } else {
      setPlayerNum('2');
      console.log("player2");
      const move = player2Moves[p2MovesIndex];
      //setTimeout(fireShots(move), 1000);
      fireShots(move);
      let nextIndex = p2MovesIndex + 1;
      console.log("nextIndex: ",nextIndex);
      setP2MovesIndex(nextIndex);
    }
  },[turn,player2Moves,p2MovesIndex,fireShots,grid1Shots,grid2Shots]);

  return (
    <div className="game-title">
      <h1>Battleship</h1>
      <h3>Player {playerNum}'s turn</h3>
      <h2 className="win-message">{winMessage}</h2>
    </div>
  )
}

export default GridTitle;
