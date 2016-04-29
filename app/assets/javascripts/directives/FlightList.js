function FlightList(){
  return {
    templateUrl: 'views/flights/_flight_list.html',
    scope: {
      flights: '='
    },
    controller: function($scope, $timeout, $filter, FlightFilterService){
      // $scope.flights is undefined without $timeout, what is the correct way to do this without $timeout?

      $timeout(function() {
        $scope.search = '';

        $scope.serviceValues = {
          search: $scope.search,
          flights: $scope.flights,
          filterStatus: "future"
        };

        $scope.searchList = function(){
          $scope.serviceValues.search = $scope.search;
          $scope.serviceValues = FlightFilterService.searchList($scope.serviceValues);
        };

        $scope.filterDates = function(direction){
          $scope.search = "";
          $scope.serviceValues.filterStatus = direction;
          $scope.serviceValues = FlightFilterService.makeList($scope.serviceValues);
        }

        $scope.searchList();
        $scope.filterDates();
      }, 225); 
    },
    link: function($scope){
      $scope.$on('updateFlightList', function(){
        $scope.filterDates();
      })
    }
  }
}

angular
  .module('hiko')
  .directive('flightList', FlightList);