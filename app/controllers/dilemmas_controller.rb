class DilemmasController < ApplicationController

    def index
        @dilemmas = Dilemma.all
        render json: @dilemmas
    end

    def show 
        @dilemma = Dilemma.find(id: params[:id])
        render json: @dilemma
    end 

    def create
        @user = User.find_by(session[:user_id])
        p session
        p session[:user_id]
        p "*****"
        @dilemma = @user.dilemmas.create(dilemma_params)
        render json: @dilemma
        p session[:user_id]
    end

    def destroy
        dilemma = Dilemma.find_by(id: params[:id])
        dilemma.delete
        render json: dilemma
    end

    private

    def dilemma_params
        params.require(:dilemma).permit(:user_id, :dilemma_text)
    end
end