class AirlineFlightSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :departure, :arrival

  def origin
    "#{object.origin.city}(#{object.origin.code})"
  end

  def destination
    "#{object.destination.city}(#{object.destination.code})"
  end
end