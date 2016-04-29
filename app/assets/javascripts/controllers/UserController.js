function UserController($scope, Auth, $state, BackendService){
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
      BackendService.getRecord("users", user.id).success(function(data){
        $scope.user = data.profile;
      });
    });

}

angular
  .module('hiko')
  .controller('UserController', UserController);