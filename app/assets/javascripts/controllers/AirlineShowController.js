function AirlineShowController(airline, $filter, BackendService, $location, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airline = airline.data.airline_show;
  ctrl.flights = ctrl.airline.flights;
  ctrl.search = '';

  ctrl.updateAirline = function(){
    BackendService.updateRecord("airlines", ctrl.airline).success(function(data){
      $location.path('/airlines/' + data.airline.id);
    });
  };

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.flights, ctrl.search);
  };

  ctrl.refilter();

}

angular
  .module('hiko')
  .controller('AirlineShowController', AirlineShowController);