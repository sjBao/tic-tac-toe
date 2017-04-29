class Game < ApplicationRecord
  belongs_to :player, foreign_key: 'winner_id'
  has_many :matches, :class_name => PlayerGame
end
