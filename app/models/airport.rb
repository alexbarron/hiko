class Airport < ActiveRecord::Base
  has_many :flights, foreign_key: :origin_id
  geocoded_by :name
  after_validation :geocode
end
