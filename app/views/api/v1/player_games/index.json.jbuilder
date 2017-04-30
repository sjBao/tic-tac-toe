json.array! @matches do |match|
  json.player1 match.player1
  json.player2 match.player2
  if match.game.winner_id
    json.winner Player.find(match.game.winner_id).name
  else
    json.winner 'Draw'
  end
 json.created_at match.created_at
end