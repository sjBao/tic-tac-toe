import React from 'react';

const BoardBox = (props) => {
  const handleClick = () => {
    props.markBox(props.index)
  }

  return (
    <button className="box" onClick={handleClick}>
      {props.mark}
    </button>
  )
}


export default BoardBox;