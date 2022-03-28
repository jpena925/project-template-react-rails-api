class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :bio, :picture, :name, :github, :linkedin, :blog

  has_many :projects
  has_many :posts
  has_many :comments

  has_many :followees, through: :followed_users
  has_many :followers, through: :following_users
end
