import React, { Component } from 'react';
import BoardBox from './BoardBox';
import './App.css';

class App extends Component {
  state = {
    board: Array(9).fill(null),
    playerOneTurn: true,
    winner: null,
  };

  markBox = (idx) => {
    let { board, playerOneTurn } = this.state;
    playerOneTurn ? board[idx] = 'X' : board[idx] = 'O';
    this.setState(prevState => ({
      board: board,
      playerOneTurn: !prevState.playerOneTurn,
    }));
  };

  checkRow = (idx) => {
    let { board } = this.state;
    let currentRow = [
      board[Math.floor(idx/3) * 3],
      board[Math.floor(idx/3) * 3 + 1],
      board[Math.floor(idx/3) * 3 + 2]
    ];
    this.checkWinner(currentRow);
  }

  checkColumn = (idx) => {
    let { board } = this.state;
    let currentRow = [
      board[Math.floor(idx%3)],
      board[Math.floor(idx%3) + 3],
      board[Math.floor(idx%3) + 6]
    ];

    this.checkWinner(currentRow);
  }

  checkDiagonals = (idx) => {
    let { board } = this.state;
    let currentRow;
    if (idx > 1 && idx < 7 && idx%2 === 0) {
      currentRow = [
        board[Math.floor(idx%2) + 2],
        board[Math.floor(idx%2) + 4],
        board[Math.floor(idx%2) + 6]
      ];
      this.checkWinner(currentRow);
    }

    if (idx%4 === 0) {
      currentRow = [
        board[Math.floor(idx%4)],
        board[Math.floor(idx%4) + 4],
        board[Math.floor(idx%4) + 8]
      ];
      this.checkWinner(currentRow);
    }
  }

  checkWinner = (arr) => {
    if (arr.every(box => box === 'X')) {
      this.setState({ winner: "Player 1"})
    };
    if (arr.every(box => box === 'O')) {
      this.setState({ winner: "Player 2"})
    };
  }

  checkIfDraw = () => {
    if (this.state.board.every(box => box !== null)){
      return true
    }
  }

  render() {
    let { board, playerOneTurn, winner , gameStatus } = this.state;
    const CurrentBoard = board.map( (boxValue, i) => {
      return (
        <BoardBox
          key={i}
          markBox={this.markBox}
          checkRow={this.checkRow}
          checkColumn={this.checkColumn}
          checkDiagonals={this.checkDiagonals}
          mark={boxValue}
          index={i}
        />
      )
    });
    if (winner !== null ) {
      gameStatus = (
        <div>
          <p>Game over!</p>
          <p>{ winner }</p>
        </div>
      )
    }
    return (
      <div className="App">
        <div className="board">
          {CurrentBoard}
        </div>

        <div className="game-status">
          { playerOneTurn ? "Player 1's Turn" : "Player 2's Turn" }
        </div>

        <div className="game-over-widget">
          {gameStatus}
        </div>
      </div>
    );
  }
}

export default App;
