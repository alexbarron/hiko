class AirportFlightSerializer < ActiveModel::Serializer
  attributes :id, :origin_id, :airline_name

  def airline_name
    object.airline.name
  end
end