import React, { Component } from 'react';
import BoardBox from './BoardBox.js';
import GameMenu from './GameMenu';
import GameStatus from './GameStatus';
import './Game.css';

class Game extends Component {
  state = {
    board: Array(9).fill(null),
    playerOneTurn: true,
    gameOver: true,
    winner: null,
  };

  mainMenu = () => {
    this.setState({
      board: Array(9).fill(null),
      winner: null,
      gameOver: true,
    });
  }

  reset = () => {
    this.setState({
      board: Array(9).fill(null),
      winner: null,
      gameOver: false
    });
  }

  forfeit = () => {
    let { playerOneTurn, winner } = this.state;
    playerOneTurn ? winner = 'Player 2 Wins!' : winner = 'Player 1 Wins!';
    this.setState({
      winner: winner,
      gameOver: true
    });
  }

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
      this.setState({
        winner: "Player 1 Wins!",
        gameOver: true
      })
    };
    if (arr.every(box => box === 'O')) {
      this.setState({
        winner: "Player 2 Wins!",
        gameOver: true
      })
    };
  }

  checkIfDraw = () => {
    let { board, winner } = this.state;

    if (board.every(box => box !== null) && !winner ){
      this.setState({
        winner: "Draw" ,
        gameOver: true
      });
    }
  }

  render() {
    let {
      board, playerOneTurn, winner, gameOver } = this.state;

    const CurrentBoard = board.map( (boxValue, i) => {
      return (
        <BoardBox
          key={i}
          markBox={this.markBox}
          checkRow={this.checkRow}
          checkColumn={this.checkColumn}
          checkDiagonals={this.checkDiagonals}
          checkIfDraw={this.checkIfDraw}
          mark={boxValue}
          gameOver={gameOver}
          index={i}
        />
      )
    });

    return (
      <div className="Game">
        <h1>Tic-Tac-Toe</h1>
        <div className="board">
          <div className={"game-menu " + gameOver}>
            { gameOver ?
              <GameMenu
                reset={this.reset}
                winner={winner}
                mainMenu={this.mainMenu}
                gameOver={gameOver}
               /> : ''
            }
          </div>
          {CurrentBoard}
        </div>

        <GameStatus
          winner={winner}
          gameOver={gameOver}
          playerOneTurn={playerOneTurn} />

        { !gameOver && !winner ?
           <button className="forfeit" onClick={this.forfeit}>
             Forfeit
           </button>
           : ''
         }
      </div>
    );
  }
}

export default Game;
