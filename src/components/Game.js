import React from 'react';
import '../App.css';
import '../battleship.css';
import Grid from './Grid';
import GridTitle from './GridTitle';
import GameTitle from './GameTitle';


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: ['0','A','B','C','D','E','F','G','H','I','J'],
      player2Ships: {
        "carrier":  ["A10", "B10", "C10","D10","E10"],
        "battleship":  ["B3", "B4", "B5","B6"],
        "destroyer":  ["F3", "G3", "H3"],
        "submarine":  ["G1","H1","I1"],
        "patrol":  ["A9", "B9"],
      },
      player1Ships: {
        "carrier":  ["A9", "B9", "C9","D9","E9"],
        "battleship":  ["A3", "A4", "A5","A6"],
        "destroyer":  ["F2", "G2", "H2"],
        "submarine":  ["G1","H1","I1"],
        "patrol":  ["A10", "B10"],
      },
      grid1Shots: [],
      grid2Shots: [],
      turn: "p1"
    };
    this.fireShots = this.fireShots.bind(this);
  }

  fireShots(coordinate) {
    let isHit = false;
    if(this.state.turn === "p1") {
      let tempShots = this.state.grid2Shots;
      Object.keys(this.state.player2Ships).forEach((ship) => {
        this.state.player2Ships[ship].forEach((location) => {
          if(location === coordinate) {
            isHit = true;
          }
        });
      });
      tempShots.push({"coordinate":coordinate,"isHit":isHit});
      if(!isHit) {
        this.setState({
          grid2Shots: tempShots,
          turn: "p2"
        });
      } else {
        this.setState({
          grid2Shots: tempShots
        });
      }
    } else {
      let tempShots = this.state.grid1Shots;
      Object.keys(this.state.player1Ships).forEach((ship) => {
        this.state.player1Ships[ship].forEach((location) => {
          if(location === coordinate) {
            isHit = true;
          }
        });
      });
      tempShots.push({"coordinate":coordinate,"isHit":isHit});
      if(!isHit) {
        this.setState({
          grid1Shots: tempShots,
          turn: "p1",
        });
      } else {
        this.setState({
          grid1Shots: tempShots,
        });
      }
    }
  }

  render() {
    return (<div className="game">
        <GameTitle turn={this.state.turn} grid1Shots={this.state.grid1Shots} grid2Shots={this.state.grid2Shots} fireShots={this.fireShots} />
        <GridTitle title="Player 1's ships" />
        <Grid turn={this.state.turn} fireShots={this.fireShots} shots={this.state.grid1Shots} gridId="1" rows={this.state.rows} />
        <GridTitle title="Player 2's ships" />
        <Grid turn={this.state.turn} fireShots={this.fireShots} shots={this.state.grid2Shots} gridId="2" rows={this.state.rows} />
      </div>);
  }
}

export default Game;
