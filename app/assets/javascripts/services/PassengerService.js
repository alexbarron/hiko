function PassengerService($http){
  this.url = 'http://localhost:3000/passengers';

  this.createRecord = function(params){
    return $http.post(this.url, params);
  }

  this.deleteRecord = function(id){
    return $http.delete(this.url + '/' + id);
  }

}

angular
  .module('hiko')
  .service('PassengerService', PassengerService);