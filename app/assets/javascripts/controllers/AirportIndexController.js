function AirportIndexController(airports, $filter, BackendService, $location){
  var ctrl = this;
  ctrl.airports = airports.data.airports;
  ctrl.airport = {};
  ctrl.search = '';

  ctrl.createAirport = function(){
    BackendService.createRecord("airports", ctrl.airport).success(function(data){
      ctrl.filteredList.push(data.airport);
      ctrl.airport = {};
      $location.path('airports');
    });
  };

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.airports, ctrl.search);
  };

  ctrl.refilter();
}

angular
  .module('hiko')
  .controller('AirportIndexController', AirportIndexController);