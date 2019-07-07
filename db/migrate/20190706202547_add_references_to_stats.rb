class AddReferencesToStats < ActiveRecord::Migration[5.1]
  def change
    change_table :stats do |t|
      t.references :character, polymorphic: true, index: true
    end
  end
end
