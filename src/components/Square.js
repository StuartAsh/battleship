import React from 'react';
import '../App.css';
import '../battleship.css';

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {cursor: 'pointer'},
      text: "",
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    if(this.props.rowID === '0' && this.props.colID !== 0) {
      this.setState({
        style: {backgroundColor: 'white', opacity: '0.8', userSelect: 'none'},
        text: this.props.colID
      });
    }
    if(this.props.rowID !== '0' && this.props.colID === 0) {
      this.setState({
        style: {backgroundColor: 'white', opacity: '0.8', userSelect: 'none'},
        text: this.props.rowID
      });
    }
    if(this.props.rowID === '0' && this.props.colID === 0) {
      this.setState({
        style: {backgroundColor: 'white', opacity: '0.8', userSelect: 'none'},
        text: ""
      });
    }
  }

  clickHandler() {
    const coordinate = this.props.rowID + this.props.colID;
    if( !(this.props.rowID === '0' || this.props.colID === 0) && this.props.turn === "p1" && this.props.gridId === "2" ) {
      this.props.fireShots(coordinate);
    }
  }

  render() {
    const coordinate = this.props.rowID + this.props.colID;
    let squareClass = "square",
        match = this.props.shots.filter(c => c.coordinate === coordinate),
        text = this.state.text;

    if(match.length > 0){
      const shot = match[0];
      if(shot.isHit) {
        squareClass="square hit";
        text = "X";
      } else {
        squareClass="square miss";
      }
    }

    return <div style={this.state.style} onClick={this.clickHandler} className={squareClass}>{text}</div>
  }
}

export default Square;
