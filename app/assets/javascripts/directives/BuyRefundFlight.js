function BuyRefundFlight() {
  return {
    templateUrl: 'views/flights/_buy_refund_flight.html',
    scope: {
      flight: '=',
      user: '='
    },
    controller: function($scope, BackendService, $state){
      $scope.user.onFlight = function(){
        var result = $.grep($scope.flight.passengers, function(p){ return p.user_id === $scope.user.id; });
        if (result.length === 1){
          $scope.user.passenger_id = result[0].id;
          return true;
        } else {
          return false;
        }
      }

      $scope.removePassenger = function(){
        BackendService.deleteRecord("passengers", $scope.user.passenger_id).success(function(data){
          alert("You've been removed from this flight.");
          $state.go('user');
        })
      };

      $scope.addPassenger = function(){
        var passenger_params = { user_id: $scope.user.id, flight_id: $scope.flight.id };
        BackendService.createRecord("passengers", passenger_params).success(function(data){
          alert("You've bought this flight and it's been added to 'Your Flights'");
          $state.go('user');
        });
      };
    }
  }
}

angular
  .module('hiko')
  .directive('buyRefundFlight', BuyRefundFlight);