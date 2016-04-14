class AirlineFlightSerializer < ActiveModel::Serializer
  attributes :id, :origin

  def origin
    "#{object.airport.city}(#{object.airport.code})"
  end
end