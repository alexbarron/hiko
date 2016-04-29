function AirportFlights(){
  return {
    templateUrl: 'views/airports/_airport_flights_table.html',
    scope: {
      airport: '='
    }
  }
}

angular
  .module('hiko')
  .directive('airportFlights', AirportFlights);