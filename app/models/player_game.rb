class PlayerGame < ApplicationRecord
  belongs_to :player1,
    class_name: Player, foreign_key: 'player1'

  belongs_to :player2,
    class_name: Player, foreign_key: 'player2'

  belongs_to :game
end
