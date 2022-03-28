class User < ApplicationRecord
    has_secure_password

    has_many :followed_users, foreign_key: :follower_id, class_name: "Relationship"
    has_many :followees, through: :followed_users, source: :followee, :dependent => :delete_all

    has_many :following_users, foreign_key: :followee_id, class_name: "Relationship"
    has_many :followers, through: :following_users, source: :follower, :dependent => :delete_all

    has_many :comments, dependent: :destroy
    has_many :posts, dependent: :destroy

    has_many :user_projects, dependent: :destroy
    has_many :projects, through: :user_projects
end
