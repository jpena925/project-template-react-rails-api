class Project < ApplicationRecord
  has_many :comments, as: :commentable

  # has_many :user_projects
  # has_many :users, through: :user_projects
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  validates :github, presence: true
end
