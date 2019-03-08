(function ($, Drupal, drupalSettings) {

	'use strict';

	Drupal.behaviors.swiper_paragraph = {
		attach: function (context, settings) {

			var swiper = new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
			});

		}
	};

})(jQuery, Drupal, drupalSettings);