class AirportIndexSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :city
end
