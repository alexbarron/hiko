angular
  .module('hiko')
  .controller('NavController', ['$scope','Auth', '$state', function($scope, Auth, $state){

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.signedIn = Auth.isAuthenticated;

    $scope.logout = Auth.logout;
    
    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
    });
}]);