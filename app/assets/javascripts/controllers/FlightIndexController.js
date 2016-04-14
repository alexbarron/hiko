function FlightIndexController(flights, $filter){
  var ctrl = this;
  ctrl.flights = flights.data.flights;
  ctrl.search = '';

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.flights, ctrl.search);
  };

  ctrl.refilter();
}

angular
  .module('hiko')
  .controller('FlightIndexController', FlightIndexController);