(function ($, Drupal, drupalSettings) {

	'use strict';

	Drupal.behaviors.built_for_teams = {
		attach: function (context, settings) {

			$.get("https://app.builtforteams.com/bpd-advertising/jobs.json", function (data) {

				console.log(data);

				var img1 = "";

				if (data.length > 0) {
					$(data).each(function (index, job) {

						var imgs = '/modules/custom/paragraphs_overrides/src/paragraphs/careers-grid/inline-imgs/';
						var gridStyles = 'col-12 col-sm-6 col-md-4 col-lg-3';

						if(index == 3) {
							var img1 = imgs + 'img1.png';
							$('#careersFeed').append(
								'<div class="career-item ' + gridStyles + '">' +
								'<div class="item-inside injected"' +
								'style="background-image: url(' + img1 + '); ' +
								'background-size: contain;' +
								'background-repeat: no-repeat;' +
								'background-position: center;' +
								'background-color: #282828;">' +
								'</div></div>');
						}
						if(index == 8) {
							var img1 = imgs + 'img2.png';
							$('#careersFeed').append(
								'<div class="career-item ' + gridStyles + '">' +
								'<div class="item-inside injected"' +
								'style="background-image: url(' + img1 + '); ' +
								'background-size: contain;' +
								'background-repeat: no-repeat;' +
								'background-position: center;' +
								'background-color: #282828;">' +
								'</div></div>');
						}
						if(index == 9) {
							var img1 = imgs + 'img3.png';
							$('#careersFeed').append(
								'<div class="career-item ' + gridStyles + '">' +
								'<div class="item-inside injected"' +
								'style="background-image: url(' + img1 + '); ' +
								'background-size: cover;' +
								'background-repeat: no-repeat;' +
								'background-position: 100% 100%;' +
								'background-color: #282828;">' +
								'</div></div>');
						}

						$('#careersFeed').append(
							'<div class="career-item ' + gridStyles + '">' +
							'<div class="item-inside">' +
							'<h4 class="title">' + job.title + '</h4>' +
							'<a href="' + job.links[0].href.replace('/apply', '') + '?source=BPD%20Website" ' +
							'class="btn btn-primary" ' +
							'target="_blank">Learn more & apply</a>' +
							'</div></div>');

					});
				}
			});

		}
	};

})(jQuery, Drupal, drupalSettings);