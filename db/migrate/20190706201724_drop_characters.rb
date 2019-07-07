class DropCharacters < ActiveRecord::Migration[5.1]
  def change
    drop_table :characters
  end
end
