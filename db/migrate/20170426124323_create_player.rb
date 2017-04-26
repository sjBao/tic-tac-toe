class CreatePlayer < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :name, :null => false

      t.timestamps, :null => false
    end

    add_index :players, :name, { :uniqueness => true }
  end
end
