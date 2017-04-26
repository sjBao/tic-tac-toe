import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li> <Link to="/">Game</Link></li>
            <li><Link to="/score">Match History</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
