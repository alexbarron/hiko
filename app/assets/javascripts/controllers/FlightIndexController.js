function FlightIndexController($scope, Auth, Flight){
  var ctrl = this;
  
  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
    
  ctrl.flights = Flight.query();
}

angular
  .module('hiko')
  .controller('FlightIndexController', FlightIndexController);