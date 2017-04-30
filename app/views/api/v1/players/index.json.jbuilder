json.array! @players do |player|
  json.name player.name
  json.wins player.games_won.count
end