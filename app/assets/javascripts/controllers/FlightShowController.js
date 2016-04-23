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

  ctrl.addPassenger = function(){
    console.log(ctrl.user.id);
    console.log(ctrl.flight.id);
    var passenger_params = { user_id: ctrl.user.id, flight_id: ctrl.flight.id };
    BackendService.createRecord("passengers", passenger_params).success(function(data){
      console.log("Added passenger");
      $state.go('flights');
    });
  };
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);