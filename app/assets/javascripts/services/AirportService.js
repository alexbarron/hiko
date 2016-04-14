function AirportService($http){
  this.allAirports = function(){
    return $http.get('http://localhost:3000/airports.json');
  }
  this.getAirport = function(id){
    return $http.get('http://localhost:3000/airports/' + id + '.json');
  }
}

angular
  .module('hiko')
  .service('AirportService', AirportService);