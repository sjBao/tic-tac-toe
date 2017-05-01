import React, { Component } from 'react';
import RecentMatches from './RecentMatches';

class Score extends Component {
  state = {
    recentMatches: [],
    leaderboard: [],
  };

  componentWillMount = () => {
    fetch('/v1/recent_matches', {
      accept: 'application/json'
    }).then(promise => {
      return promise.json()
    }).then(response => {
      this.setState({recentMatches: response});
    });
  }


  render() {
    let { recentMatches, leaderboard } = this.state
    return (
      <div className="match-history">
        <h1>Score Page</h1>
        <RecentMatches recentMatches={recentMatches} />
      </div>
    )
  }
}

export default Score;