class PassengersController < ApplicationController
  def create
    @passenger = Passenger.create(passenger_params)
    render json: @passenger
  end

  def destroy
    @passenger = Passenger.find(params[:id])
    @passenger.destroy
    render json: @passenger
  end

  private

  def passenger_params
    params.require(:passenger).permit(:user_id, :flight_id)
  end
end