class TechnologiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        techs = Technology.all
        render json: techs, status: :ok
    end

    def show
        tech = Technology.find(params[:id])
        render json: tech, status: :ok
    end

    def create
        tech = Technology.create!(tech_params)
        render json: tech, status: :created
    end

    private

    def tech_params
        params.permit(:name, :project_id)
    end

    def render_not_found_res
        render json: { error: "Tech not found" }, status: :not_found
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
