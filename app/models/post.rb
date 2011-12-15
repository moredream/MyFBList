class Post < ActiveRecord::Base
  validates :name,  :presence => true
  validates :url,  :presence => true
  validates :facebook_id,  :presence => true
  validates :description,  :presence => true
  validates_uniqueness_of :facebook_id

  scope :count_by_desc_limit20, Post.order("posts.count desc").limit(20)


def self.get_likes
    puts '100'
end

end

