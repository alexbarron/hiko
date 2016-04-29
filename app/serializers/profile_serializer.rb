class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :email, :role, :money
  has_many :flights, serializer: FlightIndexSerializer
end
