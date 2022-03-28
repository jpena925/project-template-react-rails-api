class Post < ApplicationRecord
  belongs_to :user

  has_many :comments, as: :commentable

  validates :text, presence: true, length: {in: 1..50}
end
