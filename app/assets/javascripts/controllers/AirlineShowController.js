function AirlineShowController(airline){
  var ctrl = this;
  ctrl.airline = airline.data.airline;
}

angular
  .module('hiko')
  .controller('AirlineShowController', AirlineShowController);