class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok, serializer: UserShowSerializer
    end

    def feed
        user = User.find(params[:user_id])
        projects = user.followees.map {|followee| followee.projects}
        posts = user.followees.map {|followee| followee.posts}
        arr = projects + posts
        sorted_arr = arr.flatten.sort_by {|el| el.created_at}
        render json: {projects_and_posts: sorted_arr.reverse }, status: :ok
    end

    private

    def render_not_found_res
        render json: { error: "User not found" }, status: :not_found
    end
end
