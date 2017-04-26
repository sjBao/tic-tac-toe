class CreateResults < ActiveRecord::Migration[5.0]
  def change
    create_table :results do |t|
      t.integer :winner_id

      t.timestamps(null: false)
    end
  end
end
