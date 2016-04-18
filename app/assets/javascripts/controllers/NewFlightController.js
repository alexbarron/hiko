function NewFlightController(BackendService){
  var ctrl = this;
  ctrl.test_var ="Hai";

  ctrl.createFlight = function(){
    console.log(ctrl.flight);
    //BackendService.createFlight(ctrl.flight);
  };
}

angular
  .module('hiko')
  .controller('NewFlightController', NewFlightController);