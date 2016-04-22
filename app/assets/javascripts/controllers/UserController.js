function UserController($scope, Auth, $state){
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
}

angular
  .module('hiko')
  .controller('UserController', UserController);