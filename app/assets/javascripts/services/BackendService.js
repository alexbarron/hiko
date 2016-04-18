function BackendService($http){
  this.allRecords = function(resource){
    return $http.get('http://localhost:3000/' + resource + '.json');
  }
  this.getRecord = function(resource, id){
    return $http.get('http://localhost:3000/' + resource + '/' + id + '.json');
  }
  this.updateFlightPrice = function(price, id) {
    return $http.put('http://localhost:3000/flights/' + id, { price: price});
  }
}

angular
  .module('hiko')
  .service('BackendService', BackendService);