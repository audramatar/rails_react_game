class ChangePlayersToCharacters < ActiveRecord::Migration[5.1]
  def change
    rename_table :players, :characters
  end
end
