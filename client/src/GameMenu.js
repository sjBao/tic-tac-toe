import React, { Component } from 'react'

class GameMenu extends Component {
  render() {
    let { reset, forfeit, winner, gameOver } = this.props

    return (
      <div className="game-menu">
        { gameOver ? <NewGameBtn reset={reset} /> : '' }

        { !gameOver && !winner ? <ForfeitBtn forfeit={forfeit} /> : '' }

        <button>
          Submit Score
        </button>
      </div>
    )
  };
};

const NewGameBtn = (props) => {
  return (
    <button className="reset" onClick={props.reset}>
      New Game!
    </button>
  )
}

const ForfeitBtn = (props) => {
  return (
    <button className="forfeit" onClick={props.forfeit}>
      Forfeit
    </button>
  )
}

export default GameMenu;