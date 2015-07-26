// declare map outside of the function so that we can use it more easily between objects in the  initialize function
var map;

// creating a new definition to which the new style gets associated
var MY_MAPTYPE_ID = 'custom_style';

// same old intialize function
function initialize() {
    
    // object to hold our style information
    var featureOpts = [
    {
      stylers: [
        { hue: '#890000' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#890000' }
      ]
    },
    {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      { hue: "#EA5B13" },
      { saturation: 50 }
    ]
  },
    {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#F4F50C" },
      { saturation: 100 }
    ]
  }
  ];
 // find more here: https://developers.google.com/maps/documentation/javascript/styling#map_features
    
  // same mapOption 
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(6.4531, 3.3958),
    // except now we put the control options with the new defintion
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId:MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);
  
  // now a new defintion for the style
  var styledMapOptions = {
    name: 'Custom Style'
  };
  
  // point all the above type definitions to a "StyledMapType" rather than just the "MapTypeID" from before
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  // add these to the map as a new type
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}


// a function that loads the map only once the whole page is laoded
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

// checks that the page is loaded before calling the "loadScript" function
window.onload = loadScript;
