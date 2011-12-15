class Post < ActiveRecord::Base
  validates :name,  :presence => true
  validates :url,  :presence => true
  validates :facebook_id,  :presence => true
  validates :description,  :presence => true
  validates_uniqueness_of :facebook_id

  scope :count_by_desc_limit20, Post.order("posts.count desc").limit(20)


  attr_accessor :change_counts

  def change_counts
      @posts = Post.all
      @posts.each do |post|
        Delayed::Job.enqueue GetFbInfo.new(post.id, post.facebook_id), 1, 1.minutes.from_now
      end
  end

end
