(function ($, Drupal, drupalSettings) {

	'use strict';

	Drupal.behaviors.contact_us_maps = {
		attach: function (context, settings) {

			// When the window has finished loading create our google map below
			google.maps.event.addDomListener(window, 'load', init);

			function init() {

				// How you would like to style the map.
				// This is where you would paste any style found on Snazzy
				// Maps.
				var mapStyle = [{
					"featureType": "landscape",
					"stylers": [{"hue": "#FFBB00"}, {"saturation": 43.400000000000006}, {"lightness": 37.599999999999994}, {"gamma": 1}]
				}, {
					"featureType": "road.highway",
					"stylers": [{"hue": "#FFC200"}, {"saturation": -61.8}, {"lightness": 45.599999999999994}, {"gamma": 1}]
				}, {
					"featureType": "road.arterial",
					"stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 51.19999999999999}, {"gamma": 1}]
				}, {
					"featureType": "road.local",
					"stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 52}, {"gamma": 1}]
				}, {
					"featureType": "water",
					"stylers": [{"hue": "#0078FF"}, {"saturation": -13.200000000000003}, {"lightness": 2.4000000000000057}, {"gamma": 1}]
				}, {
					"featureType": "poi",
					"stylers": [{"hue": "#00FF6A"}, {"saturation": -1.0989010989011234}, {"lightness": 11.200000000000017}, {"gamma": 1}]
				}];

				var bpdEast = {
					zoom: 8,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
					scaleControl: false,
					zoomControl: false,
					center: new google.maps.LatLng(26.371177, -80.122083),
					styles: mapStyle
				};
				var mapElement = document.getElementById('bpdEast');
				var mapEast = new google.maps.Map(mapElement, bpdEast);
				var markerEast = new google.maps.Marker({
					position: new google.maps.LatLng(26.371177, -80.122083),
					map: mapEast,
					title: 'Snazzy!'
				});


				var bpdWest = {
					zoom: 11,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
					scaleControl: false,
					zoomControl: false,
					center: new google.maps.LatLng(33.619402, -117.872679),
					styles: mapStyle
				};
				var mapElement = document.getElementById('bpdWest');
				var mapWest = new google.maps.Map(mapElement, bpdWest);
				var markerWest = new google.maps.Marker({
					position: new google.maps.LatLng(33.619402, -117.872679),
					map: mapWest,
					title: 'Snazzy!'
				});
			}
		}


	};

})(jQuery, Drupal, drupalSettings);