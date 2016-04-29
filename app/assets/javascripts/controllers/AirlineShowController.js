function AirlineShowController(airline, BackendService, $location, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.airline = airline.data.airline_show;

  ctrl.updateAirline = function(){
    BackendService.updateRecord("airlines", ctrl.airline).success(function(data){
      $location.path('/airlines/' + data.airline.id);
    });
  };

}

angular
  .module('hiko')
  .controller('AirlineShowController', AirlineShowController);