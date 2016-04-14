function AirportIndexController(airports){
  var ctrl = this;
  ctrl.airports = airports.data.airports;
}

angular
  .module('hiko')
  .controller('AirportIndexController', AirportIndexController);