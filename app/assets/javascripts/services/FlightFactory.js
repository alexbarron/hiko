function FlightFactory($resource){
  var Flight = $resource('http://localhost:3000/flights/:id', {id: '@id'},{
    update: {method: 'PUT'}
  });

  return Flight;
}

angular
  .module('hiko')
  .factory('FlightFactory', FlightFactory);