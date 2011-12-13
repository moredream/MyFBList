class GetFbInfo < Struct.new(:id, :count)
  # To change this template use File | Settings | File Templates.
  def perform

  post = Post.find(id)
  post.update_attribute(:count, -100)
  end
  handle_asynchronously :perform
end