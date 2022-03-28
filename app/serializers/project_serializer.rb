class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :github, :title, :description, :created_at
  has_many :users
  has_many :comments
end
