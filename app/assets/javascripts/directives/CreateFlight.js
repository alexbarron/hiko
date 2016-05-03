function CreateFlight(BackendService, $state){
  return {
    templateUrl: 'views/flights/_create_flight.html',
    controller: function($scope){
      $scope.flight = {};

      BackendService.allRecords("airlines").success(function(data){
        $scope.airlines = data.airlines;
      });

      BackendService.allRecords("airports").success(function(data){
        $scope.airports = data.airports;
      });

      $scope.createFlight = function(){
        BackendService.createRecord("flights", $scope.flight).success(function(data){
          $scope.$parent.ctrl.flights.unshift(data.flight);
          $scope.flight = {};

          $state.go('flights');
        });
      };  
    }
  }
}

angular
  .module('hiko')
  .directive('createFlight', CreateFlight);