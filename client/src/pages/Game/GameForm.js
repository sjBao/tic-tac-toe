import React, { Component } from 'react';

class GameForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let { player1, player2 } = this.refs;
    let winner = this.props.winner;
    if (this.props.winner.match('1')) {
      winner = 'player1';
    }
    else if (this.props.winner.match('2')) {
      winner = 'player2';
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
        winner: `${winner}`,
      })
    })
  }

  render() {
    let { cancelForm } = this.props;
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="player1">Player1</label>
        <input id="player1" type="text" name="player1" ref="player1"/>
        <br/>
        <br/>
        <label htmlFor="player2">Player2</label>
        <input id="player2" type="text" name="player2" ref="player2"/>
        <br/>
        <button type="submit">Save!</button>
        <button type="button" onClick={cancelForm}>Cancel</button>
      </form>
    )
  }
}

export default GameForm;