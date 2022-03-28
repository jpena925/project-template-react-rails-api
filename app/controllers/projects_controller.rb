class ProjectsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def show
        project = Project.find(params[:id])
        render json: project, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    private

    def project_params
        params.permit(:image_url, :github, :title, :description, :users)
    end

    def render_not_found_res
        render json: { error: "Project not found" }, status: :not_found
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
