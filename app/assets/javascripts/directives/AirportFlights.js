function AirportFlights(){
  return {
    templateUrl: 'views/airports/_airport_flights_table.html',
    scope: {
      departures: '=',
      arrivals: '=',
      airport: '='
    },
    controller: function($scope, $filter){
      $scope.searchDepartures = '';
      $scope.searchArrivals = '';

      $scope.filteredDepartures = $scope.departures;
      $scope.filteredArrivals = $scope.arrivals;

      console.log($scope.filteredDepartures.length);

      $scope.refilter = function(type){
        if (type === "departures"){
          $scope.filteredDepartures = $filter('filter')($scope.departures, $scope.searchDepartures);
        } else if (type === "arrivals"){
          $scope.filteredArrivals = $filter('filter')($scope.arrivals, $scope.searchArrivals);
        }
      };

    }
  }
}

angular
  .module('hiko')
  .directive('airportFlights', AirportFlights);