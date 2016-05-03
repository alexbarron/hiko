function UserController($scope, User, Auth, $state){
  $scope.register = function(){
    Auth.register($scope.user).then(function(){
      $state.go('flights');
    });
  };

  $scope.login = function(){
    Auth.login($scope.user).then(function(){
      $state.go('flights');
    });
  };

  Auth.currentUser()
    .then(function(user) {
      $scope.user = User.get({id: user.id});
    });
}

angular
  .module('hiko')
  .controller('UserController', UserController);