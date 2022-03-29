class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        users = User.all
        render json: users, status: :ok
    end
  
    def show 
        user = User.find(params[:id]) #for not authorized wip
        if user 
            render json: user, status: :ok, serializer: UserShowSerializer
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def show_me 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok, serializer: UserShowSerializer
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

    def flatten_hash(a_el, a_k=nil)
        result = {}

        a_el = a_el.as_json
      
        a_el.map do |k, v|
          k = "#{a_k}.#{k}" if a_k.present?
          result.merge!( [Hash, Array].include?( v.class ) ? flatten_hash( v, k ) : ( { k => v } ) )
        end if a_el.is_a?( Hash )
      
        a_el.uniq.each_with_index do |o, i|
          i = "#{a_k}.#{i}" if a_k.present?
          result.merge!( [Hash, Array].include?( o.class ) ? flatten_hash( o, i ) : ( { i => o } ) )
        end if a_el.is_a?( Array )
      
        result
    end

    def feed
        user = User.find(params[:user_id])
        data = user.followees.map do |followee|
            [followee.posts, followee.projects]
        end

        flattened_arr = data.flatten
        sorted_arr = flattened_arr.sort_by {|el| el.created_at}
        render json: sorted_arr.reverse, status: :ok
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
end
