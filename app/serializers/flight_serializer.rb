class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :airline_name, :departure, :arrival, :price
  has_many :passengers, serializer: FlightPassengerSerializer

  def origin
    {label: "#{object.origin.city}(#{object.origin.code})", lat: object.origin.latitude, long: object.origin.longitude}
  end

  def destination
    {label: "#{object.destination.city}(#{object.destination.code})", lat: object.destination.latitude, long: object.destination.longitude}
  end

  def airline_name
    object.airline.name
  end

end
