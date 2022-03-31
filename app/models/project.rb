class Project < ApplicationRecord
  has_many :comments, as: :commentable
  has_many :technologies

  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  validates :github, presence: true
end
