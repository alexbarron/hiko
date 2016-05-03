angular
  .module('hiko', ['ui.router', 'templates', 'ngResource', 'ng-rails-csrf', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('airports',{
        url: '/airports',
        templateUrl: 'views/airports/index.html',
        controller: 'AirportIndexController as ctrl'
      })
      .state('airports.new',{
        url: '/new',
        templateUrl: 'views/airports/new.html',
      })
      .state('airport',{
        url: '/airports/:id',
        templateUrl: 'views/airports/show.html',
        controller: 'AirportShowController as ctrl'
      })
      .state('airport.edit',{
        url: '/edit',
        templateUrl: 'views/airports/edit.html'
      })
      .state('airlines',{
        url: '/airlines',
        templateUrl: 'views/airlines/index.html',
        controller: 'AirlineIndexController as ctrl'
      })
      .state('airlines.new',{
        url: '/new',
        templateUrl: 'views/airlines/new.html',
      })
      .state('airlines.airline',{
        url: '/:id',
        templateUrl: 'views/airlines/show.html',
        controller: 'AirlineShowController as ctrl'
      })
      .state('airlines.airline.edit',{
        url: '/edit',
        templateUrl: 'views/airlines/edit.html',
      })
      .state('flights',{
        url: '/flights',
        templateUrl: 'views/flights/index.html',
        controller: 'FlightIndexController as ctrl'
      })
      .state('flights.new',{
        url: '/new',
        templateUrl: 'views/flights/new.html',
      })
      .state('flight',{
        url: '/flight/:id',
        templateUrl: 'views/flights/show.html',
        controller: 'FlightShowController as FlightShow'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/users/register.html',
        controller: 'UserController',
        onEnter: ['Auth', '$state', function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('flights');
          });
        }]
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/users/login.html',
        controller: 'UserController',
        onEnter: ['Auth', '$state', function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('flights');
          });
        }]
      })
      .state('user', {
        url: '/user',
        templateUrl: 'views/users/show.html',
        controller: 'UserController'
      });
    $urlRouterProvider.otherwise('flights');
  });