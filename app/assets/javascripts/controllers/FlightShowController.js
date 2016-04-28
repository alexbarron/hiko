function FlightShowController(flight, BackendService, Auth, $state){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
      ctrl.user.onFlight = function(){
        var result = $.grep(ctrl.flight.passengers, function(p){ return p.user_id === ctrl.user.id; });
        if (result.length === 1){
          ctrl.user.passenger_id = result[0].id;
          return true;
        } else {
          return false;
        }
      }
    });

  ctrl.flight = flight.data.flight;

  ctrl.updateFlight = function(){
    var flight_params = { id: ctrl.flight.id, price: ctrl.flight.price };
    BackendService.updateRecord("flights", flight_params);
  };

  ctrl.removePassenger = function(){
    BackendService.deleteRecord("passengers", ctrl.user.passenger_id).success(function(data){
      alert("You've been removed from this flight.");
      $state.go('user');
    })
  };

  ctrl.addPassenger = function(){
    var passenger_params = { user_id: ctrl.user.id, flight_id: ctrl.flight.id };
    BackendService.createRecord("passengers", passenger_params).success(function(data){
      alert("You've bought this flight and it's been added to 'Your Flights'");
      $state.go('user');
    });
  };
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);