function AirlineIndexController(airlines, BackendService, $location, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airlines = airlines.data.airlines;
  ctrl.airline = {};

  ctrl.createAirline = function(){
    BackendService.createRecord("airlines", ctrl.airline).success(function(data){
      ctrl.airlines.unshift(data.airline);
      ctrl.airline = {};
      $location.path('airlines');
    });
  };
}

angular
  .module('hiko')
  .controller('AirlineIndexController', AirlineIndexController);