class RenameEmailToUsername < ActiveRecord::Migration[5.1]
  def change
    rename_column :players, :email, :username
  end
end
