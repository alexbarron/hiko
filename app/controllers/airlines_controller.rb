class AirlinesController < ApplicationController
  before_filter :authenticate_admin, only: [:create, :update]

  def index
    @airlines = Airline.all
    render json: @airlines, each_serializer: AirlineIndexSerializer
  end

  def show
    @airline = Airline.find(params[:id])
    render json: @airline, root: false
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
