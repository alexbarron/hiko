angular
  .module('hiko', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'views/airports/index.html',
        controller: 'AirportIndexController as AirportIndex',
        resolve: {
          airports: function(AirportService){
            return AirportService.allAirports();
          }
        }
      })
      .state('airport',{
        url: '/airport/:id',
        templateUrl: 'views/airports/show.html',
        controller: 'AirportShowController as AirportShow',
        resolve: {
          airport: function($stateParams, AirportService){
            return AirportService.getAirport($stateParams.id);
          }
        }
      });
    $urlRouterProvider.otherwise('home');
  });