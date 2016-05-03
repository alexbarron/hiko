class FlightsController < ApplicationController
  before_filter :authenticate_admin, only: [:create, :update]

  def index
    @flights = Flight.all
    render json: @flights, root: false, each_serializer: FlightIndexSerializer
  end

  def show
    @flight = Flight.find(params[:id])
    render json: @flight, root: false
  end

  def create
    @flight = Flight.create(flight_params)
    render json: @flight
  end

  def update
    @flight = Flight.find(params[:id])
    @flight.update(flight_params)
    render json: @flight
  end

  private

  def flight_params
    params.require(:flight).permit(:price, :origin_id, :destination_id, :airline_id, :departure, :arrival)
  end
end
