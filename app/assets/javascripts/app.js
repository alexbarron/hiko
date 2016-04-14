angular
  .module('hiko', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'views/airports/index.html',
        controller: 'AirportIndexController as AirportIndex',
        resolve: {
          airports: function(BackendService){
            return BackendService.allRecords("airports");
          }
        }
      })
      .state('airport',{
        url: '/airport/:id',
        templateUrl: 'views/airports/show.html',
        controller: 'AirportShowController as AirportShow',
        resolve: {
          airport: function($stateParams, BackendService){
            return BackendService.getRecord("airports", $stateParams.id);
          }
        }
      })
      .state('airlines',{
        url: '/airlines',
        templateUrl: 'views/airlines/index.html',
        controller: 'AirlineIndexController as AirlineIndex',
        resolve: {
          airlines: function(BackendService){
            return BackendService.allRecords("airlines");
          }
        }
      })
      .state('airline',{
        url: '/airline/:id',
        templateUrl: 'views/airlines/show.html',
        controller: 'AirlineShowController as AirlineShow',
        resolve: {
          airline: function($stateParams, BackendService){
            return BackendService.getRecord("airlines", $stateParams.id);
          }
        }
      })
      .state('flights',{
        url: '/flights',
        templateUrl: 'views/flights/index.html',
        controller: 'FlightIndexController as FlightIndex',
        resolve: {
          flights: function(BackendService){
            return BackendService.allRecords("flights");
          }
        }
      })
      .state('flight',{
        url: '/flight/:id',
        templateUrl: 'views/flights/show.html',
        controller: 'FlightShowController as FlightShow',
        resolve: {
          flight: function($stateParams, BackendService){
            return BackendService.getRecord("flights", $stateParams.id);
          }
        }
      });
    $urlRouterProvider.otherwise('home');
  });