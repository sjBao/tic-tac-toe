import React, { Component } from 'react'

class GameMenu extends Component {
  state = {
    submittingResults: false,
  }
  
  render() {
    let { reset, winner, gameOver } = this.props

    return (
      <div className={"game-menu "+ gameOver}>
        { gameOver ? <NewGameBtn reset={reset} /> : '' }
        { gameOver && winner ? <SubmitResultsBtn /> : '' }
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