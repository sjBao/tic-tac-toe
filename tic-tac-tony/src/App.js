import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

class Layout extends Component {
  render() {
    return (
      <div>
        <nav className="container">
          <ul>
            <li className="title">Tic-Tac-Toe</li>
            <li><Link to="/">Game</Link></li>
            <li><Link to="/score">Match History</Link></li>
          </ul>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
