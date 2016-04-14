# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Airport.create(name: "Hartsfield–Jackson Atlanta International Airport", code: "ATL", city: "Atlanta")
Airport.create(name: "Los Angeles International Airport", code: "LAX", city: "Los Angeles")
Airport.create(name: "O'Hare International Airport", code: "ORD", city: "Chicago")
Airport.create(name: "Dallas/Fort Worth International Airport", code: "DFW", city: "Dallas/Fort Worth")
Airport.create(name: "John F. Kennedy International Airport", code: "JFK", city: "New York")
Airport.create(name: "San Francisco International Airport", code: "SFO", city: "San Francisco")
Airport.create(name: "Denver International Airport", code: "DEN", city: "Denver")
Airport.create(name: "Charlotte Douglas International Airport", code: "CLT", city: "Charlotte")
Airport.create(name: "McCarran International Airport", code: "LAS", city: "Las Vegas")
Airport.create(name: "Phoenix Sky Harbor International Airport", code: "PHX", city: "Phoenix")

Airline.create(name: "United Airlines", code: "UA")
Airline.create(name: "American Airlines", code: "AA")
Airline.create(name: "Delta Airlines", code: "DL")
Airline.create(name: "Virgin America", code: "VX")
Airline.create(name: "Hawaiian Airlines", code: "HA")
Airline.create(name: "Southwest Airlines", code: "WN")

airports = Airport.all
airports.each do |airport|
  Flight.create(origin_id: airport.id, airline_id: 1, price: 100, departure: (Time.now + (86400 * 10)), arrival: (Time.now + 18000 + (86400 * 10)))
  Flight.create(origin_id: airport.id, airline_id: 2, price: 200, departure: (Time.now + (86400 * 20)), arrival: (Time.now + 18000 + (86400 * 20)))
  Flight.create(origin_id: airport.id, airline_id: 3, price: 300, departure: (Time.now + (86400 * 30)), arrival: (Time.now + 18000 + (86400 * 30)))
  Flight.create(origin_id: airport.id, airline_id: 4, price: 400, departure: (Time.now + (86400 * 40)), arrival: (Time.now + 18000 + (86400 * 40)))
  Flight.create(origin_id: airport.id, airline_id: 5, price: 500, departure: (Time.now + (86400 * 50)), arrival: (Time.now + 18000 + (86400 * 50)))
end

flights = Flight.all
flights.each do |flight|
  Passenger.create(name: "Teddy Roosevelt", flight_id: flight.id)
  Passenger.create(name: "John Kennedy", flight_id: flight.id)
  Passenger.create(name: "Mao Zedong", flight_id: flight.id)
  Passenger.create(name: "Margaret Thatcher", flight_id: flight.id)
  Passenger.create(name: "Charles de Gaulle", flight_id: flight.id)
end