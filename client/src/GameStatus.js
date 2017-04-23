import React, { Component } from 'react'


class GameStatus extends Component {

  render() {
    return(
      <div className="game-status">
        { playerOneTurn ? "Player 1's Turn" : "Player 2's Turn" }
        <div className="game-status-widget">
          {gameStatus}
        </div>
      </div>
    )
  }
}

export