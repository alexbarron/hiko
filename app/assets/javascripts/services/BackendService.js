function BackendService($http){
  this.url = 'http://localhost:3000/';

  this.allRecords = function(resource){
    return $http.get(this.url + resource + '.json');
  }
  this.getRecord = function(resource, id){
    return $http.get(this.url + resource + '/' + id + '.json');
  }

  this.createRecord = function(resource, params){
    return $http.post(this.url + resource, params);
  }

  this.updateRecord = function(resource, params){
    return $http.put(this.url + resource + '/' + params.id, params);
  }

  this.deleteRecord = function(resource, id){
    return $http.delete(this.url + resource + '/' + id);
  }

}

angular
  .module('hiko')
  .service('BackendService', BackendService);