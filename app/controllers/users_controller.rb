class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        users = User.all
        render json: users, status: :ok
    end
  
    def show # should we keep both?
        user = User.find(params[:id])
        if user 
            render json: user, status: :ok, serializer: UserShowSerializer, include: ['projects.comments', 'posts.comments', 'comments', 'followees', 'followers']
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def show_me 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok, serializer: UserShowSerializer, include: ['projects.comments', 'posts.comments', 'comments', 'followees', 'followers']
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def images
        user = User.all.with_attached_featured_image.find(params[:id])
        render json: user
    end
  
    def create 
        user = User.create(user_params)
        if user.valid? 
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
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
        followee_projects = user.followees.map {|followee| [followee.posts, followee.projects]}
        
        feed_data = flatten_array(followee_projects)
        render json: feed_data, status: :ok
    end

    def discover
        user = User.find(params[:user_id])
        discovery_users = User.all.where.not(id: user.followees.pluck(:id)).where.not(id: user.id)
        discovery_projects = discovery_users.map {|d_user| [d_user.posts, d_user.projects]}
        
        discovery_data = flatten_array(discovery_projects)
        render json: discovery_data, status: :ok
    end

    private

    def user_params
        params.permit(:email, :password, :password_confirmation, :bio, :featured_image, :name, :github, :linkedin, :blog)
    end

    def render_not_found_res
        render json: { error: "User not found" }, status: :not_found
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def flatten_array(projects_arr)
        flattened_arr = projects_arr.flatten
        sorted_arr = flattened_arr.sort_by {|el| el.created_at}
        sorted_arr.reverse
    end
end
