class AddLatitudeAndLongitudeToAirport < ActiveRecord::Migration
  def change
    add_column :airports, :latitude, :float
    add_column :airports, :longitude, :float
  end
end
