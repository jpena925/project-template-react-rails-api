class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :email, :featured_image, :name


  has_many :projects
  has_many :posts
  has_many :comments

  has_many :followees, through: :followed_users
  has_many :followers, through: :following_users

    def featured_image
      if object.featured_image.attached?
        {
          url: rails_blob_url(object.featured_image)
        }
      end
    end
    
end
