function BackendService($http){
  this.allRecords = function(resource){
    return $http.get('http://localhost:3000/' + resource + '.json');
  }
  this.getRecord = function(resource, id){
    return $http.get('http://localhost:3000/' + resource + '/' + id + '.json');
  }
}

angular
  .module('hiko')
  .service('BackendService', BackendService);