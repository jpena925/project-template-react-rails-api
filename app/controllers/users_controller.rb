class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok, serializer: UserShowSerializer
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    # stretch goal
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
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

    def user_params
        params.permit(:email, :password, :bio, :picture, :name, :github, :linkedin, :blog)
    end

    def render_not_found_res
        render json: { error: "User not found" }, status: :not_found
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
