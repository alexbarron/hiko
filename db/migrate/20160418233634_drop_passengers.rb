class DropPassengers < ActiveRecord::Migration
  def change
    drop_table :passengers
  end
end
