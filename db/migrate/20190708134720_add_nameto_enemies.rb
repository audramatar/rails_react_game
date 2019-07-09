class AddNametoEnemies < ActiveRecord::Migration[5.1]
  def change
    add_column :enemies, :name, :string
  end
end
