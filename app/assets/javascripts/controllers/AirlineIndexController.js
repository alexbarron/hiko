function AirlineIndexController(airlines, BackendService, $location){
  var ctrl = this;
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