class Flight < ActiveRecord::Base
  belongs_to :origin, foreign_key: :origin_id, class_name: "Airport"
  belongs_to :destination, foreign_key: :destination_id, class_name: "Airport"
  belongs_to :airline
  has_many :passengers
  has_many :users, through: :passengers

  def departure_time
    self.departure.strftime("%m/%d/%Y %H:%M")
  end

  def arrival_time
    self.arrival.strftime("%m/%d/%Y %H:%M")
  end
end
