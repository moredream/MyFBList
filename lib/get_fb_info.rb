require 'json'
require 'net/https'

class GetFbInfo < Struct.new(:id, :facebook_id)
  # To change this template use File | Settings | File Templates.
  def perform

    post = Post.find(id)

    fcount = get_facebook_likes(post.facebook_id)

    post.update_attribute(:count, fcount)


  end

  def get_facebook_likes(id)

    url = URI.parse("https://graph.facebook.com/" + id.to_s)
    http= Net::HTTP.new(url.host,url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    req = Net::HTTP::Get.new(url.request_uri)
    res = http.request(req)

    jdata = JSON.parse(res.body)
    result =  jdata["likes"]

    return result
  end

  handle_asynchronously :perform
end


