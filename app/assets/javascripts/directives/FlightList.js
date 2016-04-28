function FlightList(){
  return {
    templateUrl: 'views/flights/_flight_list.html',
    scope: {
      flights: '='
    },
    controller: function($scope, $timeout, $filter){
      // $scope.flights is undefined without $timeout, what is the correct way to do this without $timeout?

      $timeout(function() {
        $scope.filteredList = $scope.flights;
        $scope.search = '';

        var filterStatus = "future";

        $scope.searchList = function(){
          $scope.filteredList = $filter('filter')($scope.makeList(filterStatus), $scope.search);
        };

        $scope.makeList = function(direction){
          var now = new Date;
          var flights = $scope.flights;
          $scope.filteredList = [];
          if (direction === "all"){
            $scope.filteredList = $scope.flights;
            filterStatus = "all";
          } else if (direction === "past"){
              for(var i = 0; i < flights.length; i++){
                if (new Date(flights[i].departure) < now){
                  $scope.filteredList.push(flights[i]);
                } 
              }
              filterStatus = "past";
          } else{
              for(var i = 0; i < flights.length; i++){
                if (new Date(flights[i].departure) > now){
                  $scope.filteredList.push(flights[i]);
                }
              }
              filterStatus = "future";
          }
          return $scope.filteredList;   
        }

        $scope.filterDates = function(direction){
          $scope.search = "";
          return $scope.makeList(direction);
        }

        $scope.searchList();
        $scope.filterDates();
      }, 175); 
    }
  }
}

angular
  .module('hiko')
  .directive('flightList', FlightList);