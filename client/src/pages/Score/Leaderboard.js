import React from 'react';
import './Leaderboard.css'

const Leaderboard = (props) => {
  return (
    <table className="leaderboard">
        <thead>
          <tr>
            <td>Player</td>
            <td>Wins</td>
          </tr>
        </thead>
        <tbody>
          {
            props.leaderboard.map((entry, i) => {
              return(
                <tr key={i}>
                  <td className="match-players">
                    <p>{ entry.name }</p>
                  </td>
                  <td>{ entry.wins }</td>
                </tr>
              )
            })
          }
        </tbody>
    </table>
  )
}

export default Leaderboard;