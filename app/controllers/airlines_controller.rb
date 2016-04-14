class AirlinesController < ApplicationController
  def index
    @airlines = Airline.all
    render json: @airlines
  end

  def show
    @airline = Airline.find(params[:id])
    render json: @airline
  end
end
