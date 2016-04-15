function AirportShowController(airport, $filter){
  var ctrl = this;
  ctrl.airport = airport.data.airport;
  ctrl.departures = ctrl.airport.departures;
  ctrl.arrivals = ctrl.airport.arrivals;
  ctrl.searchDepartures = '';
  ctrl.searchArrivals = '';

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