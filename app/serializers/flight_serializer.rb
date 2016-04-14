class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin_id, :origin_city, :origin_airport_name

  def origin_city
    object.airport.city
  end

  def origin_airport_name
    object.airport.name
  end
end
