class FlightIndexSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :airline_name, :departure, :arrival

  def origin
    {label: "#{object.origin.city}(#{object.origin.code})"}
  end

  def destination
    {label: "#{object.destination.city}(#{object.destination.code})"}
  end

  def airline_name
    object.airline.name
  end

end
