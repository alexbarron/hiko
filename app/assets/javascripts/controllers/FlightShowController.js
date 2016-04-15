function FlightShowController(flight){
  var ctrl = this;
  ctrl.flight = flight.data.flight;

  var center = {
    lat: (ctrl.flight.origin.lat + ctrl.flight.destination.lat) / 2,
    long: (ctrl.flight.origin.long + ctrl.flight.destination.long) / 2
  }

  ctrl.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(center.lat, center.long),
      mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var marker1 = new google.maps.Marker({
    map: ctrl.map,
    position: new google.maps.LatLng(ctrl.flight.origin.lat, ctrl.flight.origin.long)
  });

  var marker2 = new google.maps.Marker({
    map: ctrl.map,
    position: new google.maps.LatLng(ctrl.flight.destination.lat, ctrl.flight.destination.long)
  });

  var geodesicPoly = new google.maps.Polyline({
    strokeColor: '#CC0099',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    geodesic: true,
    map: ctrl.map
  });

  var path = [marker1.getPosition(), marker2.getPosition()];
  geodesicPoly.setPath(path);

}

angular
  .module('hiko')
  .controller('FlightShowController', FlightShowController);