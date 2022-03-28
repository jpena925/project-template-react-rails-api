class ProjectsController < ApplicationController
    before_action :authorize 

    private 

    def authorize 
        return render json: { error: "Not authorize" }, status: :unauthorized unless session.include? :user_id
    end
end
