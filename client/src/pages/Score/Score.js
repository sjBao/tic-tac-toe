import React, { Component } from 'react';

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

        <div className="recentMatches">
          <table>
            <thead>
              <tr>
                <th>Player1</th>
                <th>Player2</th>
                <th>Winner</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {
                recentMatches.map((match, i) => {
                  return(
                    <tr key={i}>
                      <td>{ match.player1.name }</td>
                      <td>{ match.player2.name }</td>
                      <td>{ match.winner }</td>
                      <td>{ match.created_at }</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Score;