function AirportShowController(airport, $filter, BackendService, $location, Auth, FlightFilterService){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airport = airport.data.airport_show;

  ctrl.departures = FlightFilterService.futureFlights({flights: ctrl.airport.departures, filteredList: []});
  ctrl.arrivals = FlightFilterService.futureFlights({flights: ctrl.airport.arrivals, filteredList: []});

  ctrl.updateAirport = function(){
    BackendService.updateRecord("airports", ctrl.airport).success(function(data){
      $location.path('/airport/' + data.airport.id);
    });
  }
}

angular
  .module('hiko')
  .controller('AirportShowController', AirportShowController);