(function ($, Drupal, drupalSettings) {

	'use strict';

	Drupal.behaviors.facebook_feed = {
		attach: function (context, settings) {


			// Facebook get prep
			let id = '118732568165833';
			let accessToken = '383460361807140|C9driUiOt0ZTKcoacLF31GzR4eE';
			let url = 'https://graph.facebook.com/v3.1/' + id + '/posts?fields=full_picture,picture,type,link,created_time,message,name,object_id&access_token=' + accessToken;

			// Get facebook feed json
			$.get(url, function (json) {

				let data = json.data;

				// Output json data in html
				if (data.length > 0) {
					$(data).each(function (index, post) {

						let created = post.created_time;
						let date = moment(created);

						let card =
							'<a href="' + post.link + '"' +
							'target="_blank"' +
							'class="card facebook-post">' +
								'<div class="card-body">' +
									'<img src="' + post.full_picture + '" class="post-image img-fluid">' +
									post.message +
									'<div class="time-ago">' + date.fromNow() + '</div>' +
								'</div>' +
							'</a>';

						$('#facebookFeed .results-wrapper').append(card);
					})
				}

			})
				.done(function () {

					// Apply masonry layout
					let grid = $('#facebookFeed .results-wrapper').masonry({
						// options
						itemSelector: '.facebook-post',
						columnWidth: '.facebook-post-sizer',
						percentPosition: true,
						transitionDuration: 0,
						gutter: '.gutter-sizer',
					});

					// Once images are loaded, relayout
					grid.imagesLoaded().progress(function () {
						grid.masonry('layout');
					});
				})

		}
	};

})(jQuery, Drupal, drupalSettings);