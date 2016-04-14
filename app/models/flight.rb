class Flight < ActiveRecord::Base
  belongs_to :airport
  belongs_to :airline
  has_many :passengers
end
