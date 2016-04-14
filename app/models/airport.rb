class Airport < ActiveRecord::Base
  has_many :flights
  has_many :airlines, through: :flights
  geocoded_by :name
  after_validation :geocode
end
