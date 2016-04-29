class PassengerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :flight_id, :price_paid
end