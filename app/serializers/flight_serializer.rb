class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin, :airline_name, :departure, :arrival
  has_many :passengers, serializer: FlightPassengerSerializer

  def origin
    "#{object.airport.city}(#{object.airport.code})"
  end

  def airline_name
    object.airline.name
  end

  def departure
    object.departure_time
  end

  def arrival
    object.arrival_time
  end
end
