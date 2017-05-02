import React, { Component } from 'react'

class GameMenu extends Component {
  state = {
    submittingResults: false,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { player1, player2 } = this.refs;
    let winner = this.props.winner;
    let winnerName;

    if (winner.match('1')) {
      winnerName = 'player1';
    }
    else if (winner.match('2')) {
      winnerName = 'player2';
    }

    fetch("/v1/player_games", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player1: `${player1.value}`,
        player2: `${player2.value}`,
        winner: `${winnerName}`
      })
    })
  }

  render() {
    let { reset, winner, gameOver } = this.props

    return (
      <div className={"game-menu "+ gameOver}>
        { gameOver ? <NewGameBtn reset={reset} /> : '' }
        { gameOver && winner ? <SubmitResultsBtn /> : '' }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="player1">Player1 name:</label>
          <input id="player1" type="text" name="player1" ref="player1"/>
          <br/>
          <br/>
          <label htmlFor="player2">Player2 name:</label>
          <input id="player2" type="text" name="player2" ref="player2"/>
          <input type="submit"/>
        </form>
      </div>
    )
  };
};

const NewGameBtn = (props) => (
    <button className="reset" onClick={props.reset}>
      New Game!
    </button>
)

const SubmitResultsBtn = () => (
    <button className="submit-results">
      Submit results!
    </button>
)
export default GameMenu;