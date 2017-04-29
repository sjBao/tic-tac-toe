class PlayerGame < ApplicationRecord
  belongs_to :player1,
    class_name: Player, foreign_key: 'player1'

  belongs_to :player2,
    class_name: Player, foreign_key: 'player2'

  belongs_to :game

  validate :players_are_unique

  def players_are_unique
    if @player1 == @player2
      errors.add(:players, "Players must have different names.")
    end
  end
end
