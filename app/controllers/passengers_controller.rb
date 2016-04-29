class PassengersController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :destroy]

  def create
    @passenger = Passenger.create(passenger_params)
    @passenger.user.buy_flight(@passenger.price_paid)
    render json: @passenger
  end

  def destroy
    @passenger = Passenger.find(params[:id])
    @passenger.user.refund_flight(@passenger.price_paid)
    @passenger.destroy
    render json: @passenger
  end

  private

  def passenger_params
    params.require(:passenger).permit(:flight_id, :user_id, :price_paid)
  end
end