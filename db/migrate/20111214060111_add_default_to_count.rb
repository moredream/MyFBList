class AddDefaultToCount < ActiveRecord::Migration
  def change
    change_column :posts, :count, :integer, :default => 0, :null => false
  end
end
