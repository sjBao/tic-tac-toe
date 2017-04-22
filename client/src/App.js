import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    board: ['','','','','','','','',''],
    playerOneTurn: true,
  };

  markBox = (e) => {
    console.log(e.target.);
    let newBoard = this.state.board;
    newBoard[5] = 5;
    this.setState({
      board: newBoard
    });
  };

  render() {
    const board = this.state.board.map( (boxValue, i) => {
      return (
        <input key={i} className="box" onClick={this.markBox} value={boxValue} />
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
