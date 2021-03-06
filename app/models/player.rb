class Player < ApplicationRecord
  validates :name, presence: true, length: { maximum: 21 }

  has_many :games_won,
    :class_name => Game, :foreign_key => 'winner_id'

  has_many :matches,
    :class_name => PlayerGame, :foreign_key => 'player1'

  has_many :games_played,
    :through => :matches, :source => :game
end
