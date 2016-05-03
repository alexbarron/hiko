function AirportIndexController(airports, Airport, $state, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airports = airports.data.airports;
  ctrl.airport = new Airport();

  ctrl.createAirport = function(){
    ctrl.airport.$save(function(data){
      ctrl.airports.unshift(data.airport);
      ctrl.airport = {};
      $state.go('airports');
    });
  };
}

angular
  .module('hiko')
  .controller('AirportIndexController', AirportIndexController);