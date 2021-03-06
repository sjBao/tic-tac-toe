import React, { Component } from 'react';
import MatchList from './MatchList';
import Leaderboard from './Leaderboard';
import './Score.css'

class Score extends Component {
  state = {
    recentMatches: [],
    leaderboard: [],
  };

  fetchRecentMatches= () => {
    fetch(`/v1/recent_matches`, {
      accept: 'application/json'
    }).then(promise => {
      return promise.json()
    }).then(response => {
      this.setState({recentMatches: response});
    });
  };

  fetchLeaderboard= () => {
    fetch(`/v1/most_wins`, {
      accept: 'application/json'
    }).then(promise => {
      return promise.json()
    }).then(response => {
      this.setState({leaderboard: response});
    });
  };

  componentWillMount = () => {
    this.fetchRecentMatches();
    this.fetchLeaderboard();
  }

  render() {
    let { recentMatches, leaderboard } = this.state
    return (
      <div className="match-history">
        <Leaderboard leaderboard={leaderboard} />
        <MatchList recentMatches={recentMatches} />
      </div>
    )
  }
}

export default Score;