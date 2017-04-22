import React, { Component } from 'react';
import BoardBox from './BoardBox';
import './App.css';

class App extends Component {
  state = {
    board: [null,null,null,null,null,null,null,null,null],
    playerOneTurn: true,
  };

  markBox = (idx) => {
    let { board, playerOneTurn } = this.state;
    if (playerOneTurn) {
      board[idx] = 'X'
    } else {
      board[idx] = 'O'
    }
    this.setState(prevState => ({
      board: board,
      playerOneTurn: !prevState.playerOneTurn,
    }));
  };

  render() {
    const board = this.state.board.map( (boxValue, i) => {
      return (
        <BoardBox
          key={i} markBox={this.markBox} mark={boxValue} index={i}/>
      )
    });
    return (
      <div className="App">
        <div className="board">
          {board}
        </div>
      </div>
    );
  }
}

export default App;
