class Flight < ActiveRecord::Base
  belongs_to :airport, foreign_key: :origin_id
  belongs_to :airline
  has_many :passengers
end
