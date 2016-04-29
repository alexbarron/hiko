function FlightList(){
  return {
    templateUrl: 'views/flights/_flight_list.html',
    scope: {
      flights: '='
    },
    controller: function($scope){
      $scope.dateFilter = "future";
    }
  }
}

angular
  .module('hiko')
  .directive('flightList', FlightList);