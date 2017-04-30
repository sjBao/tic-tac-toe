json.name @player.name
json.games_won @player.games_won.count
json.games_played PlayerGame.where("player1 = ? OR player2 = ?", @player.id, @player.id)