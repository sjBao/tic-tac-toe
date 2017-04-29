class Game < ApplicationRecord
  belongs_to :player, foreign_key: 'winner_id'
  has_one :matches, :class_name => PlayerGame
end
