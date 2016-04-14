class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin, :airline_name

  def origin
    "#{object.airport.city}(#{object.airport.code})"
  end

  def airline_name
    object.airline.name
  end
end
