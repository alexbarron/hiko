class AirportFlightSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :airline_name, :departure, :arrival

  def airline_name
    object.airline.name
  end

  def origin
    "#{object.origin.city}(#{object.origin.code})"
  end

  def destination
    "#{object.destination.city}(#{object.destination.code})"
  end
end