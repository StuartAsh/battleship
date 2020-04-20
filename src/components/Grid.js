import React from 'react';
import '../App.css';
import '../battleship.css';
import Row from './Row';

class Grid extends React.Component {
  render() {
    return (<div className="grid">
        {this.props.rows.map((row) => {
          return <Row turn={this.props.turn} fireShots={this.props.fireShots} shots={this.props.shots} gridId={this.props.gridId} key={row} rowID={row} />
        })}
      </div>);
  }
}

export default Grid;
