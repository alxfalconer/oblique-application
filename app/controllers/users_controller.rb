class UsersController < ApplicationController
    before_action :find_user
  
      def index
          @users = User.all
          render json: @users
      end

      # def show
      #   render json: user
      # end

      def show 
        user = User.find_by(id: params[:id])
        render json: user, include: :user
    end
  
      # def show
      #   @user = User.find_by(id: session[:user_id])
      #   if @user
      #     render json: @user
      #   else
      #     render json: { error: "Not authorized" }, status: :unauthorized
      #   end
      # end

      def create 
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: {
              status: :created,
            user: user
        }
        else
            render json: { error: "Not Created"}, status: :bad_request
        end
    end

    def me 
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
    
      def user_pairs
        @user = User.find(params[:user_id])
        @pairs = @user.pairs
        render json: @pairs, include: :user
    end
    
      private

      def user_params
        params.permit(:email, :name, :password)
    end

    def find_user
      user = User.find_by(id: params[:id])
    end
    

  end