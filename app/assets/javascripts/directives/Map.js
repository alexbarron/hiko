function Map() {
  return {
    templateUrl: 'views/flights/map.html',
    scope: {
      orglat: '=',
      orglong: '=',
      destlat: '=',
      destlong: '='
    },
    controllerAs: 'map',
    controller: function($scope){
      var center = {
        lat: ($scope.orglat + $scope.destlat) / 2,
        long: ($scope.orglong + $scope.destlong) / 2
      }

      $scope.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: new google.maps.LatLng(center.lat, center.long),
          mapTypeId: google.maps.MapTypeId.TERRAIN
      });

      var marker1 = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng($scope.orglat, $scope.orglong)
      });

      var marker2 = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng($scope.destlat, $scope.destlong)
      });

      var geodesicPoly = new google.maps.Polyline({
        strokeColor: '#CC0099',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true,
        map: $scope.map
      });

      var path = [marker1.getPosition(), marker2.getPosition()];
      geodesicPoly.setPath(path);
    }
  }
}

angular
  .module('hiko')
  .directive('map', Map);