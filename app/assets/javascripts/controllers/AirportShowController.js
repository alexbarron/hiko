function AirportShowController(airport, $filter){
  var ctrl = this;
  ctrl.airport = airport.data.airport;
  ctrl.flights = ctrl.airport.flights

  ctrl.search = '';

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.flights, ctrl.search);
  };

  ctrl.refilter();
}

angular
  .module('hiko')
  .controller('AirportShowController', AirportShowController);