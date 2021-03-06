class Game < ApplicationRecord
  belongs_to :winner,
    foreign_key: 'winner_id',
    class_name: Player,
    optional: true

  has_one :matches,
    class_name: PlayerGame

  def winner
    return 'Draw' unless @winner
    @winner
  end
end
