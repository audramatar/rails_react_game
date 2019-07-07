class CreateEnemies < ActiveRecord::Migration[5.1]
  def change
    create_table :enemies do |t|

      t.timestamps
    end
  end
end
