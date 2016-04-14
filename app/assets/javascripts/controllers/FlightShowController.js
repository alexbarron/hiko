function FlightShowController(flight){
  var ctrl = this;
  ctrl.flight = flight.data.flight;
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);