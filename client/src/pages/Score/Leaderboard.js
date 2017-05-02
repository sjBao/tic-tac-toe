import React from 'react';
import './Leaderboard.css'

const Leaderboard = (props) => {
  return (
    <table className="leaderboard">
        <thead>
          <tr>
            <th colSpan="2">
              <h1>Leaderboard</h1>
            </th>
          </tr>
          <tr>
            <th>Player</th>
            <th>Wins</th>
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