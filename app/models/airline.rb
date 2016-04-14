class Airline < ActiveRecord::Base
  has_many :flights
  has_many :airports, through: :flights, foreign_key: :origin_id
end
