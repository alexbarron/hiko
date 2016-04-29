class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :email, :role
  has_many :flights, serializer: FlightIndexSerializer
end
