var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.59363273, lng: 34.5453836},
    scrollwheel: false,
    zoom: 17
  });
};

