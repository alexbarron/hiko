function FlightIndexController(flights, $filter, BackendService, $location){
  var ctrl = this;
  ctrl.flights = flights.data.flights;
  ctrl.flight = {};

  ctrl.filteredList = ctrl.flights
  ctrl.search = '';

  var filterStatus = "future";

  ctrl.searchList = function(){
    ctrl.filteredList = $filter('filter')(ctrl.makeList(filterStatus), ctrl.search);
  };

  ctrl.makeList = function(direction){
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
    return ctrl.filteredList;   
  }

  ctrl.filterDates = function(direction){
    ctrl.search = "";
    return ctrl.makeList(direction);
  }

  ctrl.loadForm = function(){
    BackendService.allRecords("airlines").success(function(data){
      ctrl.airlines = data.airlines;
    });

    BackendService.allRecords("airports").success(function(data){
      ctrl.airports = data.airports;
    });
  };

  ctrl.createFlight = function(){
    BackendService.createRecord("flights", ctrl.flight).success(function(data){
      ctrl.filteredList.unshift(data.flight);
      ctrl.flight = {};
      $location.path('flights');
    });
  };

  ctrl.searchList();
  ctrl.filterDates();
}

angular
  .module('hiko')
  .controller('FlightIndexController', FlightIndexController);