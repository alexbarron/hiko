function BackendService($http){
  this.allRecords = function(resource){
    return $http.get('http://localhost:3000/' + resource + '.json');
  }
  this.getRecord = function(resource, id){
    return $http.get('http://localhost:3000/' + resource + '/' + id + '.json');
  }

  this.createRecord = function(resource, params){
    return $http.post('http://localhost:3000/' + resource, params);
  }

  this.updateRecord = function(resource, params){
    return $http.put('http://localhost:3000/' + resource + '/' + params.id, params);
  }

  this.deleteRecord = function(resource, id){
    return $http.delete('http://localhost:3000/' + resource + '/' + id);
  }

}

angular
  .module('hiko')
  .service('BackendService', BackendService);