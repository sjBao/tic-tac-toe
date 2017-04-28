class Player < ApplicationRecord
  validates :name, presence: true
  has_many :games_won,
    :class_name => Game, :foreign_key => 'winner_id'

  has_many :player_game
  has_many :games_played,
    :through => :player_game, :source => :game
end
