function FlightList(){
  return {
    templateUrl: 'views/flights/_flight_list.html',
    scope: {
      flights: '='
    },
    controller: function($scope, $filter){
      $scope.dateFilter = "future";
      $scope.query = "";
    },
    link: function($scope){
      $scope.$on('updateFlightList', function(){
        //$scope.filterDates();
      })
    }
  }
}

angular
  .module('hiko')
  .directive('flightList', FlightList);