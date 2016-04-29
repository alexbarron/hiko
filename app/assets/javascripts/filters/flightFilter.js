function flightFilter() {
    return function (flights, direction) {
        var now = new Date;
        if (!flights) { return; }
        return flights.filter(function (flight) {
          if (direction === "all"){
            return flight;
          } else if (direction === "past"){
            return new Date(flight.departure) < now;
          } else {
            return new Date(flight.departure) > now;
          }
        });
    };
}
 
angular
    .module('hiko')
    .filter('flightFilter', flightFilter);