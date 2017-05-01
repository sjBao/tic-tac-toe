import React from 'react'

const MatchList = (props) => {
  return (
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
            props.recentMatches.map((match, i) => {
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
  )
}

export default MatchList;