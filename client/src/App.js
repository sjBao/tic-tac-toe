import React, { Component } from 'react';
import BoardBox from './BoardBox';
import './App.css';

class App extends Component {
  state = {
    board: [0,1,2,3,4,5,6,7,8],//Array(9).fill(null),
    playerOneTurn: true,
  };

  markBox = (idx) => {
    let { board, playerOneTurn } = this.state;
    playerOneTurn ? board[idx] = 'X' : board[idx] = 'O';
    this.setState(prevState => ({
      board: board,
      playerOneTurn: !prevState.playerOneTurn,
    }));
  };

  checkWinner = (arr) => {
    if (arr.every(box => box === 'X')) {
      console.log('Player 1 Wins!')
    };
    if (arr.every(box => box === 'O')) {
      console.log('Player 2 Wins!')
    };
  }

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

  render() {
    const board = this.state.board.map( (boxValue, i) => {
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
