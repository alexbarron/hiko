class AddTimesToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :departure, :datetime
    add_column :flights, :arrival, :datetime
  end
end
