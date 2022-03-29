class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        render json: Comment.all, status: :ok
    end

    def show
        render json: Comment.find(params[:id]), status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:text, :commentable_type, :commmentable_id, :user_id)
    end

    def render_not_found_res
        render json: { error: "Post not found" }, status: :not_found
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
end
