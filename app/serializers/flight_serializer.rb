class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin, :airline_name
  has_many :passengers, serializer: FlightPassengerSerializer

  def origin
    "#{object.airport.city}(#{object.airport.code})"
  end

  def airline_name
    object.airline.name
  end
end
