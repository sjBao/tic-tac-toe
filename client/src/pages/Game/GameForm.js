import React, { Component } from 'react';
import './GameForm.css'

class GameForm extends Component {
  state = {
    errors: [],
  }

  handleSubmit = (event) => {
    let { mainMenu, cancelForm } = this.props;
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player1: `${player1.value}`,
        player2: `${player2.value}`,
        winner: `${winner}`,
      })
    }).then(promise => {
        return promise.json()
    }).then(response => {
      if (response.error) {
        this.setState({ errors: response.error })
      } else {
        cancelForm();
        mainMenu();
      }
    });
  }

  render() {
    let { cancelForm } = this.props;
    return(
      <form onSubmit={this.handleSubmit}>
        <ul style={ {textAlign: 'left'} }>
          { this.state.errors.map((error, i) => (
            <li key={i}>{error}</li>
            ))
          }
        </ul>
        <div className="input-section">
          <input
            id="player1"
            type="text"
            name="player1"
            ref="player1"
            placeholder="Player 1"
          />
          <input
            placeholder="Player 2"
            id="player2"
            type="text"
            name="player2"
            ref="player2"/>
        </div>
        <br/>
        <button type="submit">Save</button>
        <button
          className="cancel"
          type="button"
          onClick={cancelForm}>
          Cancel
        </button>
      </form>
    )
  }
}
export default GameForm;