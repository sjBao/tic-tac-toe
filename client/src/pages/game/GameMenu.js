import React, { Component } from 'react'

class GameMenu extends Component {
  render() {
    let { reset, forfeit, winner, gameOver } = this.props

    return (
      <div className="game-menu false">
        { !gameOver && !winner ? <ForfeitBtn forfeit={forfeit} /> : '' }
      </div>
    )
  };
};

const NewGameBtn = (props) => (
    <button className="reset" onClick={props.reset}>
      New Game!
    </button>
)

const ForfeitBtn = (props) => (
    <button className="forfeit" onClick={props.forfeit}>
      Forfeit
    </button>
)

const SubmitResultsBtn = () => (
    <button className="submit-results">
      Submit results!
    </button>
)
export default GameMenu;