function User($resource){
  var User = $resource('/users/:id', {id: '@id'},{
    update: { method: 'PUT'},
    delete: { method: 'DELETE'}
  });
  return User;
}

angular
  .module('hiko')
  .factory('User', User);