class AddPricePaidToPassengers < ActiveRecord::Migration
  def change
    add_column :passengers, :price_paid, :integer
  end
end
