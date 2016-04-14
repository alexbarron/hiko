class PassengersController < ApplicationController
  def index
    @passengers = Passenger.all
    render json: @passengers
  end

  def show
    @passenger = Passenger.find(params[:id])
    render json: @passenger
  end
end
