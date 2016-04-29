function FlightShowController(flight, BackendService, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.flight = flight.data.flight;

  if (new Date(ctrl.flight.departure) > new Date){
    ctrl.futureFlight = true;
  } else {
    ctrl.futureFlight = false;
  }

  ctrl.updateFlight = function(){
    var flight_params = { id: ctrl.flight.id, price: ctrl.flight.price };
    BackendService.updateRecord("flights", flight_params);
  };
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);