import React from 'react';

const BoardBox = (props) => {
  const handleClick = () => {
    props.markBox(props.index)
    props.checkIfDraw()
    props.checkRow(props.index)
    props.checkColumn(props.index)
    props.checkDiagonals(props.index)
  }

  let player;
  props.mark === 'X' ? player = "player1" : player = "player2"

  return (
    <button
      className={"board-box " + player}
      onClick={handleClick}
      disabled={props.mark || props.gameOver}>
      {props.mark}
    </button>
  )
}


export default BoardBox;