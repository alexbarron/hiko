function AirlineIndexController(airlines){
  var ctrl = this;
  ctrl.airlines = airlines.data.airlines;
}

angular
  .module('hiko')
  .controller('AirlineIndexController', AirlineIndexController);