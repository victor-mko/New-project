
var map;
function initMap() {
var styles = [
{
	"featureType":"all",
	"elementType":"labels.text.fill",
	"stylers": [
		{"saturation":100},
		{"color":"#ffffff"},
		{"lightness":100}
	]
	},
{
	"featureType":"all",
	"elementType":"labels.text.stroke",
	"stylers":[
		{"visibility":"on"},
		{"color":"#000000"},
		{"lightness":16}
	]},
{
	"featureType":"all",
	"elementType":"labels.icon",
	"stylers":[
		{"visibility":"on"}
	]},
{
	"featureType":"administrative",
	"elementType":"geometry.fill",
	"stylers":[
		{"color":"#000000"},
		{"lightness":20}
	]},
{
	"featureType":"administrative",
	"elementType":"geometry.stroke",
	"stylers":[
		{"color":"#000000"},
		{"lightness":17},
		{"weight":1.2}
	]},
{
	"featureType":"landscape",
	"elementType":"geometry",
	"stylers":[
		{"color":"#000000"},
		{"lightness":20}
	]},
{
	"featureType":"landscape.man_made",
	"elementType":"geometry.stroke",
	"stylers":[
		{"color":"#c0c0c0"},
		{"lightness":20},
		{"weight": 7.5}
	]},
{
	"featureType":"poi",
	"elementType":"geometry",
	"stylers":[
		{"color":"#3a6326"},
		{"lightness":21}
	]},
{	
	"featureType":"road.highway",
	"elementType":"geometry",
	"stylers":[
		{"visibility":"on"},
		{"weight":"5.40"},
		{"color":"#e2644a"}
	]},
{
	"featureType":"road.highway",
	"elementType":"geometry.fill",
	"stylers":[
		{"color":"#0d0135"},
		{"lightness":"0"},
		{"saturation":"0"},
		{"weight":"1.00"},
		{"visibility":"on"}
	]},
{
	"featureType":"road.highway",
	"elementType":"geometry.stroke",
	"stylers":[
		{"color":"#e2644a"},
		{"lightness":"0"},
		{"weight":"2.00"},
		{"visibility":"on"},
		{"saturation":"0"},
		{"gamma":"1.00"}
	]},
{	
	"featureType":"road.highway",
	"elementType":"labels.text",
	"stylers":[
		{"visibility":"off"}
	]},
{
	"featureType":"road.arterial",
	"elementType":"geometry",
	"stylers":[
		{"color":"#fe846b"},
		{"lightness":18}
	]},
{
	"featureType":"road.local",
	"elementType":"geometry",
	"stylers":[
		{"color":"#fdb4a5"},
		{"lightness":16}
	]},
{
	"featureType":"transit",
	"elementType":"geometry",
	"stylers":[
		{"color":"#000000"},
		{"lightness":19}
	]},
{
	"featureType":"water",
	"elementType":"geometry",
	"stylers":[
		{"color":"#0f252e"},
		{"lightness":17}
	]}
];

  var naplessPizza = {lat: 49.59363273, lng: 34.5453836};

  map = new google.maps.Map(document.getElementById('map'), {
    center: naplessPizza,
    scrollwheel: false,
    zoom: 17
  });

  map.setOptions({styles: styles});

  var marker = new google.maps.Marker({
    position: naplessPizza,
    map: map,
    title: 'Пиццерия "Неаполь"'
  });
};


  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination - 100 }, 700);
    return false;
  });


