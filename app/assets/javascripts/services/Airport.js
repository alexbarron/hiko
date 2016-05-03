function Airport($resource){
  var Airport = $resource('/airports/:id', {id: '@id'},{
    update: { method: 'PUT'},
    delete: { method: 'DELETE'}
  });
  return Airport;
}

angular
  .module('hiko')
  .factory('Airport', Airport);