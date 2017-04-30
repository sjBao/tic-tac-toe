json.id @player.id
json.name @player.name
json.games_won @player.games_won.count
json.games_played_count PlayerGame.where("player1 = ? OR player2 = ?", @player.id, @player.id).count

games_played = PlayerGame.where("player1 = ? OR player2 = ?", @player.id, @player.id)

json.games_played games_played do |match|
  json.player1 match.player1
  json.player2 match.player2
  if match.game.winner_id
    json.winner Player.find(match.game.winner_id).name
  else
    json.winner 'Draw'
  end
  json.created_at match.created_at
end

