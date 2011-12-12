class Post < ActiveRecord::Base
  validates :name,  :presence => true
  validates :url,  :presence => true
  validates :facebook_id,  :presence => true
  validates :description,  :presence => true
  validates_uniqueness_of :facebook_id

end
