function AirportShowController(airport, $filter, BackendService, $location, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airport = airport.data.airport_show;
  ctrl.departures = ctrl.airport.departures;
  ctrl.arrivals = ctrl.airport.arrivals;
  ctrl.searchDepartures = '';
  ctrl.searchArrivals = '';

  ctrl.updateAirport = function(){
    BackendService.updateRecord("airports", ctrl.airport).success(function(data){
      $location.path('/airport/' + data.airport.id);
    });
  }

  ctrl.refilter = function(category){
    if (category == "departures"){
      ctrl.filteredDepartures = $filter('filter')(ctrl.departures, ctrl.searchDepartures);
    } else if (category == "arrivals"){
      ctrl.filteredArrivals = $filter('filter')(ctrl.arrivals, ctrl.searchArrivals);
    }
  };

  ctrl.filteredDepartures = $filter('filter')(ctrl.departures, ctrl.search);
  ctrl.filteredArrivals = $filter('filter')(ctrl.arrivals, ctrl.search);
}

angular
  .module('hiko')
  .controller('AirportShowController', AirportShowController);