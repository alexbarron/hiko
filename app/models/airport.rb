class Airport < ActiveRecord::Base
  has_many :flights
  has_many :airlines, through: :flights
end
