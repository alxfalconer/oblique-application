class StrategiesController < ApplicationController

    def index
        strategies = Strategy.all
        render json: strategies
    end

    def show 
        @strategy = Strategy.find(id: params[:id])
        render json: @strategy
    end

    # def create
    #     @strategy = Strategy.new(strategy_params)
    #     @strategy.save
    #     render json: @strategy
    # end

    def create
        @user = User.find_by(session[:user_id])
        p session
        p session[:user_id]
        p "*****"
        @strategy = @user.strategies.create(strategy_params)
        render json: @strategy
        p session[:user_id]
    end

    def update
        strategy = Strategy.find_by(id: params[:id])
        strategy.update(strategy_params)
        render json: strategy
    end

    def destroy
        strategy = Strategy.find_by(id: params[:id])
        strategy.delete
        render json: strategy
    end

    # def create
    #     @user = User.find_by(session[:user_id])
    #     @strategy = @user.strategies.create(strategy_params)
    #     render json: @strategy
    # end

    private

    def strategy_params
        params.require(:strategy).permit(:user_id, :dilemma_id, :strategy_text)
        # params.permit(:dilemma_id, :strategy_text)
    end

    # def dilemma_params
    #     params.require(:dilemma).permit(:user_id, :dilemma_text)
    # end
end


    