function Flight($resource){
  var Flight = $resource('/flights/:id', {id: '@id'},{
    update: { method: 'PUT'},
    delete: { method: 'DELETE'}
  });
  return Flight;
}

angular
  .module('hiko')
  .factory('Flight', Flight);