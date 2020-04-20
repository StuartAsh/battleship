import React from 'react';
import '../App.css';
import '../battleship.css';
import Square from './Square';

class Row extends React.Component {
  render() {
    const columns = [0,1,2,3,4,5,6,7,8,9,10];

    return (<div className="row">
      { columns.map((col) => {
          return <Square turn={this.props.turn} fireShots={this.props.fireShots} shots={this.props.shots} gridId={this.props.gridId} key={this.props.rowID + col} colID={col} rowID={this.props.rowID}/>
        })
      }
      </div>)
  }
}

export default Row;
