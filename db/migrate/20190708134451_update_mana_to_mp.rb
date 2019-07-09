class UpdateManaToMp < ActiveRecord::Migration[5.1]
  def change
    rename_column :stat_sheets, :mana, :mp
    remove_column :stat_sheets, :name
  end
end
