class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name
      t.string :url
      t.string :facebook_id
      t.integer :count
      t.text :description

      t.timestamps
    end
     add_index :posts, :count
     add_index :posts, :facebook_id ,:unique =>true
  end

end
