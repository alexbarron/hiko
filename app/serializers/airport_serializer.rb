class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :city
  has_many :flights, serializer: AirportFlightSerializer
end
