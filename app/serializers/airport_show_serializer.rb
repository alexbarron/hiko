class AirportShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :city
  has_many :departures, serializer: AirportFlightSerializer
  has_many :arrivals, serializer: AirportFlightSerializer
end
