import React, { Component } from 'react'

class GameStatus extends Component {

  render() {
    let { playerOneTurn, winner, gameOver } = this.props

    const gameStatus = () => {
      if (!gameOver) {
        return (
          <div className="player-turn">
            { playerOneTurn ? "Player 1's Turn" : "Player 2's Turn" }
          </div>
        )
      } else {
        return (
          <div className="game-status">
            { winner }
          </div>
        )
      }
    }

    return gameStatus()
  }
}
export default GameStatus;