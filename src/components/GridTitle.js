import React from 'react';
import '../App.css';
import '../battleship.css';

function GridTitle(props) {
  return (
    <div className="grid-title">{props.title}</div>
  )
}

export default GridTitle;
