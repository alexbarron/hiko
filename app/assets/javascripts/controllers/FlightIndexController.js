function FlightIndexController(flights, $filter){
  var ctrl = this;
  ctrl.flights = flights.data.flights;
  ctrl.filteredList = ctrl.flights
  ctrl.search = '';

  var filterStatus = "future";

  ctrl.refilter = function(){
    if (ctrl.filteredList.length === 0 && ctrl.search === ""){
      ctrl.filteredList = $filter('filter')(ctrl.filterDates(filterStatus), ctrl.search);
    } else {
      ctrl.filteredList = $filter('filter')(ctrl.filteredList, ctrl.search);
    }
    
  };

  ctrl.filterDates = function(direction){
    var now = new Date;
    var flights = ctrl.flights;
    ctrl.filteredList = [];
    if (direction === "all"){
      ctrl.filteredList = ctrl.flights;
      filterStatus = "all";
    } else if (direction === "past"){
        for(var i = 0; i < flights.length; i++){
          if (new Date(flights[i].departure) < now){
            ctrl.filteredList.push(flights[i]);
          } 
        }
        filterStatus = "past";
    } else{
        for(var i = 0; i < flights.length; i++){
          if (new Date(flights[i].departure) > now){
            ctrl.filteredList.push(flights[i]);
          }
        }
        filterStatus = "future";
    }
    ctrl.search = "";
    return ctrl.filteredList;
  }

  ctrl.refilter();
  ctrl.filterDates();
}

angular
  .module('hiko')
  .controller('FlightIndexController', FlightIndexController);