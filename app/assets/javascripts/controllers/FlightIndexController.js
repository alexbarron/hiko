function FlightIndexController(flights, $filter, BackendService, $location, Auth){
  var ctrl = this;
  
  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
    
  ctrl.flights = flights.data.flights;
  ctrl.flight = {};

  ctrl.loadForm = function(){
    BackendService.allRecords("airlines").success(function(data){
      ctrl.airlines = data.airlines;
    });

    BackendService.allRecords("airports").success(function(data){
      ctrl.airports = data.airports;
    });
  };

  ctrl.createFlight = function(){
    BackendService.createRecord("flights", ctrl.flight).success(function(data){
      ctrl.flights.unshift(data.flight);
      ctrl.flight = {};
      $location.path('flights');
    });
  };
}

angular
  .module('hiko')
  .controller('FlightIndexController', FlightIndexController);