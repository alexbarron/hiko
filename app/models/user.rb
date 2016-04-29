class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  enum role: [:user, :admin]
  has_many :passengers
  has_many :flights, through: :passengers

  def buy_flight(price)
    self.money -= price
    self.save
  end

  def refund_flight(price)
    self.money += price
    self.save
  end
end
