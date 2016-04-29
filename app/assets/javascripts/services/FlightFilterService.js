function FlightFilterService($filter){
  this.searchList = function(serviceValues){
    var newValues = this.makeList(serviceValues);
    newValues.filteredList = $filter('filter')(newValues.filteredList, serviceValues.search);
    return newValues;
  }

  this.makeList = function(serviceValues){
    serviceValues.filteredList = [];
    if (serviceValues.filterStatus === "all"){
      serviceValues.filteredList = serviceValues.flights;
    } else if (serviceValues.filterStatus === "past"){
      serviceValues.filteredList = this.pastFlights(serviceValues);
    } else{
      serviceValues.filteredList = this.futureFlights(serviceValues);
    }
    return serviceValues;   
  }

  this.pastFlights = function(serviceValues){
    var now = new Date;
    for(var i = 0; i < serviceValues.flights.length; i++){
      if (new Date(serviceValues.flights[i].departure) < now){
        serviceValues.filteredList.push(serviceValues.flights[i]);
      } 
    }
    return serviceValues.filteredList;
  }

  this.futureFlights = function(serviceValues){
    var now = new Date;
    for(var i = 0; i < serviceValues.flights.length; i++){
      if (new Date(serviceValues.flights[i].departure) > now){
        serviceValues.filteredList.push(serviceValues.flights[i]);
      } 
    }
    return serviceValues.filteredList;
  }
}

angular
  .module('hiko')
  .service('FlightFilterService', FlightFilterService);