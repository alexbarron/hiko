class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :airline_name, :departure, :arrival
  has_many :passengers, serializer: FlightPassengerSerializer

  def origin
    "#{object.origin.city}(#{object.origin.code})"
  end

  def destination
    "#{object.destination.city}(#{object.destination.code})"
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
