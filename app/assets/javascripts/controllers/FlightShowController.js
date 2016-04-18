function FlightShowController(flight, BackendService){
  var ctrl = this;
  ctrl.flight = flight.data.flight;

  ctrl.updateFlight = function(){
    BackendService.updateFlightPrice(ctrl.flight.price, ctrl.flight.id);
  };
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);