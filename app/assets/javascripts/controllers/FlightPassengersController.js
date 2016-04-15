function FlightPassengersController(){
  var ctrl = this;
  ctrl.test_var = "Hai to dere";
}

angular
  .module('hiko')
  .controller('FlightPassengersController', FlightPassengersController);