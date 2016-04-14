function AirportShowController(airport){
  var ctrl = this;
  ctrl.airport = airport.data.airport;
}

angular
  .module('hiko')
  .controller('AirportShowController', AirportShowController);