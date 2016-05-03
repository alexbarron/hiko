function AirlineIndexController(airlines, $state, Auth, Airline){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airlines = airlines.data.airlines;
  ctrl.airline = new Airline();

  ctrl.createAirline = function(){
    ctrl.airline.$save(function(data){
      ctrl.airlines.unshift(data.airline);
      ctrl.airline = {};
      $state.go('airlines');
    });
  };
}

angular
  .module('hiko')
  .controller('AirlineIndexController', AirlineIndexController);