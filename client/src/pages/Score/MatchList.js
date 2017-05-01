import React from 'react';
// import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import './MatchList.css'

const MatchList = (props) => {
  return (
    <table className="match-list">
        <thead>
          <tr>
            <td>Players</td>
            <td>Winner</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {
            props.recentMatches.map((match, i) => {
              return(
                <tr key={i}>
                  <td className="match-players">
                    <p>{ match.player1.name }</p>
                    vs.
                    <p>{ match.player2.name }</p>
                  </td>
                  <td>{ match.winner }</td>
                  <td>{ dateFormat(match.created_at, 'mediumDate') }</td>
                </tr>
              )
            })
          }
        </tbody>
    </table>
  )
}

export default MatchList;