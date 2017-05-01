import React from 'react';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');
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
                    { match.player1.name } vs. { match.player2.name }
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