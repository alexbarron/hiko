class FlightsController < ApplicationController
  def index
    @flights = Flight.all.sort {|a,b| a.departure <=> b.departure}
    render json: @flights
  end

  def show
    @flight = Flight.find(params[:id])
    render json: @flight
  end

  def update
    @flight = Flight.find(params[:id])
    @flight.update(flight_params)
    render json: @flight
  end

  private

  def flight_params
    params.require(:flight).permit(:price)
  end
end
