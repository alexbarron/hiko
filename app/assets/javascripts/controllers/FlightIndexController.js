function FlightIndexController($scope, flights, Auth){
  var ctrl = this;
  
  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
    
  ctrl.flights = flights.data.flights;
}

angular
  .module('hiko')
  .controller('FlightIndexController', FlightIndexController);