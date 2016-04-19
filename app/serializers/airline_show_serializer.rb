class AirlineShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :code
  has_many :flights, serializer: AirlineFlightSerializer
end
