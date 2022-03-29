class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at
  
  belongs_to :user
  has_many :comments
end
