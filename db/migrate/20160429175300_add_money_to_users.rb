class AddMoneyToUsers < ActiveRecord::Migration
  def change
    add_column :users, :money, :integer, default: 10000
  end
end
