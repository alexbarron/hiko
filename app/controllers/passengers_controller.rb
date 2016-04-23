class PassengersController < ApplicationController
  def create
    @passenger = Passenger.create(passenger_params)
  end

  private

  def passenger_params
    params.require(:passenger).permit(:user_id, :flight_id)
  end
end