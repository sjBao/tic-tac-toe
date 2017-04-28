class Game < ApplicationRecord
  belongs_to :player, foreign_key: 'winner_id'
end
