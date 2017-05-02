class PlayerGame < ApplicationRecord
  belongs_to :player1,
    class_name: Player, foreign_key: 'player1'

  belongs_to :player2,
    class_name: Player, foreign_key: 'player2'

  belongs_to :game

  validate :players_are_unique

  validates_associated [:player1, :player2], { presence: true }

  def players_are_unique
    if player1.name == player2.name
      errors.add(:players, "must have different names.")
    end
  end
end
