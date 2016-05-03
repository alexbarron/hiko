function AirportShowController(Airport, $stateParams, $location, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airport = Airport.get({id: $stateParams.id });

  ctrl.updateAirport = function(){
    ctrl.airport.$update(function(data){
      ctrl.airport = data.airport;
      $location.path('/airports/' + data.airport.id);
    })
  };
}

angular
  .module('hiko')
  .controller('AirportShowController', AirportShowController);