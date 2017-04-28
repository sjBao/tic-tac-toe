class CreatePlayerGames < ActiveRecord::Migration[5.0]
  def change
    create_table :player_games do |t|
      t.integer :game_id
      t.integer :player1
      t.integer :player2

      t.timestamps
    end
  end
end
