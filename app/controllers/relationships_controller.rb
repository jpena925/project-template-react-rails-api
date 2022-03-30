class RelationshipsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :relationship_not_found

    def create 
        relationship = Relationship.create!(relationship_params)
        render json: relationship
    end

    def check_follow
        relationship = Relationship.where(follower_id: params[:follower_id], followee_id: params[:followee_id])
        render json: relationship, status: :ok
    end

    def show 
        relationship = Relationship.where(followee_id: params[:id])
        render json: relationship
    end

    def destroy 
        relationship = Relationship.find(params[:id])
        relationship.destroy
        head :no_content
    end

    private

    def relationship_params
        params.permit(:follower_id, :followee_id)
    end

    def relationship_not_found
        render json: { error: "Relationship not found" }, status: :not_found
    end

end
