function AirportIndexController(airports, $filter, BackendService, $location, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airports = airports.data.airports;
  ctrl.airport = {};
  ctrl.search = '';

  ctrl.createAirport = function(){
    BackendService.createRecord("airports", ctrl.airport).success(function(data){
      ctrl.filteredList.unshift(data.airport);
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