class AirlinesController < ApplicationController
  def index
    @airlines = Airline.all
    render json: @airlines
  end

  def show
    @airline = Airline.find(params[:id])
    render json: @airline
  end

  def create
    @airline = Airline.create(airline_params)
    render json: @airline
  end

  def update
    @airline = Airline.find(params[:id])
    @airline.update(airline_params)
    render json: @airline
  end

  private

  def airline_params
    params.require(:airline).permit(:name, :code)
  end
end
