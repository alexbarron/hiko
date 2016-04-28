function FlightShowController(flight, BackendService, Auth, $state){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.flight = flight.data.flight;

  ctrl.updateFlight = function(){
    var flight_params = { id: ctrl.flight.id, price: ctrl.flight.price };
    BackendService.updateRecord("flights", flight_params);
  };
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);