class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :bio, :picture, :name, :github, :linkedin, :blog
end
