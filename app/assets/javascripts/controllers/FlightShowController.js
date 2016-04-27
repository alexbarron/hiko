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

  ctrl.removePassenger = function(){
    var result = $.grep(ctrl.flight.passengers, function(p){ return p.user_id === ctrl.user.id; });
    if (result.length === 1){
      //console.log(result[0].id);
      BackendService.deleteRecord("passengers", result[0].id).success(function(data){
        alert("You've been removed from this flight.");
        $state.go('user');
      })
    } else {
      console.log("Didn't find");
    }
    
  };

  ctrl.addPassenger = function(){
    var passenger_params = { user_id: ctrl.user.id, flight_id: ctrl.flight.id };
    BackendService.createRecord("passengers", passenger_params).success(function(data){
      $state.go('user');
    });
  };
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);