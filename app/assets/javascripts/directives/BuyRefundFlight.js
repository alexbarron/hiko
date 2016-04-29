function BuyRefundFlight() {
  return {
    templateUrl: 'views/flights/_buy_refund_flight.html',
    scope: {
      flight: '=',
      user: '='
    },
    controller: function($scope, BackendService, $state){
      if ($scope.user) {
        $scope.user.onFlight = function(){
          var result = $.grep($scope.flight.passengers, function(p){ return p.user_id === $scope.user.id; });
          if (result.length === 1){
            $scope.user.passenger_id = result[0].id;
            return true;
          } else {
            return false;
          }
        }
      }

      $scope.removePassenger = function(){
        BackendService.deleteRecord("passengers", $scope.user.passenger_id).success(function(data){
          $state.go('user');
          alert("You've been removed from this flight and refunded $" + $scope.flight.price.toLocaleString() + ".");
        })
      };

      $scope.addPassenger = function(){
        if ($scope.user.money >= $scope.flight.price){
          var passenger_params = { user_id: $scope.user.id, flight_id: $scope.flight.id, price_paid: $scope.flight.price };
          BackendService.createRecord("passengers", passenger_params).success(function(data){
            $state.go('user');
            alert("You've bought this flight for $" + $scope.flight.price.toLocaleString() + " and it's been added to 'Your Flights'");
            
          });
        } else {
          alert("Sorry, you can't afford that flight");
        }
      };
    }
  }
}

angular
  .module('hiko')
  .directive('buyRefundFlight', BuyRefundFlight);