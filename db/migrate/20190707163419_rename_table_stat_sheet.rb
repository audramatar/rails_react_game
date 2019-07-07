class RenameTableStatSheet < ActiveRecord::Migration[5.1]
  def change
    rename_table :statSheets, :stat_sheets
  end
end
