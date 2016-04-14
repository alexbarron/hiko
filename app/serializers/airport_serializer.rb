class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :city
end
