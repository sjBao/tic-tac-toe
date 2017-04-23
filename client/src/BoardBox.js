import React from 'react';

const BoardBox = (props) => {
  const handleClick = () => {
    props.markBox(props.index)
    props.checkRow(props.index)
    props.checkColumn(props.index)
    props.checkDiagonals(props.index)
    props.checkIfDraw()
  }

  return (
    <button
      className="box"
      onClick={handleClick}
      disabled={props.mark}>
      {props.mark}
    </button>
  )
}


export default BoardBox;