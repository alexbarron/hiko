angular
  .module('hiko', ['ui.router', 'templates', 'ngResource', 'ng-rails-csrf'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('airports',{
        url: '/airports',
        templateUrl: 'views/airports/index.html',
        controller: 'AirportIndexController as ctrl',
        resolve: {
          airports: function(BackendService){
            return BackendService.allRecords("airports");
          }
        }
      })
      .state('airports.new',{
        url: '/new',
        templateUrl: 'views/airports/new.html',
      })
      .state('airport',{
        url: '/airport/:id',
        templateUrl: 'views/airports/show.html',
        controller: 'AirportShowController as ctrl',
        resolve: {
          airport: function($stateParams, BackendService){
            return BackendService.getRecord("airports", $stateParams.id);
          }
        }
      })
      .state('airport.edit',{
        url: '/edit',
        templateUrl: 'views/airports/edit.html'
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
      .state('airlines.new',{
        url: '/new',
        templateUrl: 'views/airlines/new.html',
      })
      .state('airlines.airline',{
        url: '/:id',
        templateUrl: 'views/airlines/show.html',
        controller: 'AirlineShowController as AirlineShow',
        resolve: {
          airline: function($stateParams, BackendService){
            return BackendService.getRecord("airlines", $stateParams.id);
          }
        }
      })
      .state('airlines.airline.edit',{
        url: '/edit',
        templateUrl: 'views/airlines/edit.html',
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
      .state('flights.new',{
        url: '/new',
        templateUrl: 'views/flights/new.html',
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
    $urlRouterProvider.otherwise('flights');
  });