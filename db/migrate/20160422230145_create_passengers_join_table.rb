class CreatePassengersJoinTable < ActiveRecord::Migration
  def change
    create_table :passengers do |t|
      t.integer :user_id
      t.integer :flight_id

      t.timestamps null: false
    end
  end
end
