
// intialises the map information into a "mapOptions" objects
function initialize() {
  var myLatLng = new google.maps.LatLng(6.4531, 3.3958);
  var mapOptions = {
    zoom: 8,
    center: myLatLng,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
// makes a "map" object that places the map in the ID with all the "mapOptions"
  var map = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);

// you can add as many as you like but with a new position variable
var marker=new google.maps.Marker({
  position:myLatLng,
  });

marker.setMap(map);
}

// checks that the page is loaded before calling the "loadScript" function
google.maps.event.addDomListener(window, 'load', initialize);
