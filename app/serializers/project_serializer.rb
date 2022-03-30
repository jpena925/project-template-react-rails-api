class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :github, :title, :description, :created_at
  belongs_to :user
  has_many :comments
  has_many :technologies
end
