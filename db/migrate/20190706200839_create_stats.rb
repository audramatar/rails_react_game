class CreateStats < ActiveRecord::Migration[5.1]
  def change
    create_table :stats do |t|
      t.string :name
      t.integer :attack
      t.integer :ac
      t.integer :hp
      t.integer :mana

      t.timestamps
    end
  end
end
