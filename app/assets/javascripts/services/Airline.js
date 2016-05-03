function Airline($resource){
  var Airline = $resource('/airlines/:id', {id: '@id'},{
    update: { method: 'PUT'},
    delete: { method: 'DELETE'}
  });
  return Airline;
}

angular
  .module('hiko')
  .factory('Airline', Airline);