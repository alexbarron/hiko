function AirlineShowController(airline, $filter){
  var ctrl = this;
  ctrl.airline = airline.data.airline;
  ctrl.flights = ctrl.airline.flights;
  ctrl.search = '';

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.flights, ctrl.search);
  };

  ctrl.refilter();

}

angular
  .module('hiko')
  .controller('AirlineShowController', AirlineShowController);