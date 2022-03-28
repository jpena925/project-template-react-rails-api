class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :created_at
  has_one :user
end
