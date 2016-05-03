function AirlineShowController(Airline, $stateParams, $location, Auth){
  var ctrl = this;

  ctrl.airline = Airline.get({id: $stateParams.id });

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.updateAirline = function(){
    ctrl.airline.$update(function(data){
      ctrl.airline = data.airline;
      $location.path('/airlines/' + data.airline.id);
    })
  };

}

angular
  .module('hiko')
  .controller('AirlineShowController', AirlineShowController);