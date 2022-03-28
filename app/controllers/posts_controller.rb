class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def show
        post = Post.find(params[:id])
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end
    
    private

    def post_params
        params.permit(:text, :user_id)
    end

    def render_not_found_res
        render json: { error: "Post not found" }, status: :not_found
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
