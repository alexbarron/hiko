function AirportIndexController(airports, $filter){
  var ctrl = this;
  ctrl.airports = airports.data.airports;
  ctrl.search = '';

  ctrl.refilter = function(){
    ctrl.filteredList = $filter('filter')(ctrl.airports, ctrl.search);
  };

  ctrl.refilter();
}

angular
  .module('hiko')
  .controller('AirportIndexController', AirportIndexController);