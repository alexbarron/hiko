class AirportsController < ApplicationController
  before_filter :authenticate_admin, only: [:create, :update]

  def index
    @airports = Airport.all
    render json: @airports, root: false, each_serializer: AirportIndexSerializer
  end

  def show
    @airport = Airport.find(params[:id])
    render json: @airport, root: false
  end

  def create
    @airport = Airport.create(airport_params)
    render json: @airport
  end

  def update
    @airport = Airport.find(params[:id])
    @airport.update(airport_params)
    render json: @airport
  end

  private

  def airport_params
    params.require(:airport).permit(:city, :name, :code)
  end
end
