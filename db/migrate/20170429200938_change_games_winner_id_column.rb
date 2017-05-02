class ChangeGamesWinnerIdColumn < ActiveRecord::Migration[5.0]
  def change
    change_column :games, :winner_id, :integer, null: true
  end
end
