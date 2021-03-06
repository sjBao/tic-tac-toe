import React, { Component } from 'react';
import GameForm from './GameForm';

class GameMenu extends Component {
  state = {
    submittingResults: false,
  }

  toggleForm = () => {
    this.setState({
      submittingResults: true
    })
  }

  cancelForm = () => {
    this.setState({
      submittingResults: false
    })
  }

  render() {
    let { submittingResults } = this.state
    let { reset, mainMenu, winner, gameOver } = this.props

    return (
      <div className={"game-menu "+ gameOver}>
        { gameOver && !submittingResults ?
          <NewGameBtn reset={reset} /> :
          ''
        }

        { gameOver && winner && !submittingResults ?
          <SubmitResultsBtn toggleForm={this.toggleForm} /> :
          ''
        }

        { submittingResults ?
          <GameForm
            winner={winner}
            mainMenu={mainMenu}
            cancelForm={this.cancelForm} /> :
          ''
        }
      </div>
    )
  };
};

const NewGameBtn = (props) => (
  <button className="reset" onClick={props.reset}>
    New Game!
  </button>
)

const SubmitResultsBtn = (props) => (
  <button className="submit-results" onClick={props.toggleForm}>
    Submit results!
  </button>
)
export default GameMenu;