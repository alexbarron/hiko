function FlightIndexController(flights){
  var ctrl = this;
  ctrl.flights = flights.data.flights;
}

angular
  .module('hiko')
  .controller('FlightIndexController', FlightIndexController);