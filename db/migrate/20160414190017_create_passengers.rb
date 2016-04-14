class CreatePassengers < ActiveRecord::Migration
  def change
    create_table :passengers do |t|
      t.string :name
      t.integer :flight_id

      t.timestamps null: false
    end
  end
end
