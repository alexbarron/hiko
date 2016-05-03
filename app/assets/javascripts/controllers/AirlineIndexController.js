function AirlineIndexController($state, Auth, Airline){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airlines = Airline.query();

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