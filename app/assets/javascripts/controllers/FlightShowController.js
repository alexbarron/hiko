function FlightShowController(Flight, Auth, $stateParams){
  var ctrl = this;

  ctrl.flight = Flight.get({id: $stateParams.id });

  ctrl.flight.$promise.then(function(data){
    if (new Date(data.departure) > new Date){
      ctrl.futureFlight = true;
    } else {
      ctrl.futureFlight = false;
    }
  });

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });


  ctrl.updateFlight = function(){
    ctrl.flight.$update(function(data){
      ctrl.flight = data.flight;
    })
  }
}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);