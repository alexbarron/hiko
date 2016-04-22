class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :flights, serializer: FlightIndexSerializer
end
