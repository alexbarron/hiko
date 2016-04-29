class Passenger < ActiveRecord::Base
  belongs_to :flight
  belongs_to :user
  validates_presence_of :flight_id, :user_id, :price_paid
end
