import React, { Component } from 'react'

class GameStatus extends Component {

  render() {
    let { playerOneTurn, winner, gameOver } = this.props

    const gameStatus = () => {
      if (!gameOver) {
        return (
          <div className="player-turn">
            {
              playerOneTurn ?
              <h2 className="player1">
                Player 1's Turn
              </h2>
               :
              <h2 className="player2">
                Player 2's Turn
              </h2>
             }
          </div>
        )
      } else {
        return (
          <div className="game-status">
            <h1 className={ (winner || '').match('Player 1') ? 'player1': 'player2' }>{ winner }</h1>
          </div>
        )
      }
    }

    return gameStatus()
  }
}
export default GameStatus;