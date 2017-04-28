class Player < ApplicationRecord
  validates :name, presence: true
  has_many :games_won,
    :class_name => Game, :foreign_key => 'winner_id'
end
