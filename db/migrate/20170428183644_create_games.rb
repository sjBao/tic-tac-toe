class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :winner_id

      t.timestamps(null: false)
    end
  end
end
