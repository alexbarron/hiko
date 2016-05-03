function AirportIndexController(airports, $filter, BackendService, $location, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airports = airports.data.airports;
  ctrl.airport = {};

  ctrl.createAirport = function(){
    BackendService.createRecord("airports", ctrl.airport).success(function(data){
      ctrl.airports.unshift(data.airport);
      ctrl.airport = {};
      $location.path('airports');
    });
  };
}

angular
  .module('hiko')
  .controller('AirportIndexController', AirportIndexController);