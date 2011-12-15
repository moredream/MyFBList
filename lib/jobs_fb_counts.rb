
class JobsFBCounts


  def self.update_all_counts
      @posts = Post.all
      @posts.each do |post|
        Delayed::Job.enqueue GetFbInfo.new(post.id, post.facebook_id), 1, 1.minutes.from_now
      end
  end
end