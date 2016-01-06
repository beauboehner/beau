/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

// Do not enter code above this line --bmb

/*
Drupal.behaviors.welcomeText = {
	attach: function (context, settings) {
		$('.welcome-text').hide();
	}
};
*/

Drupal.behaviors.latestBlocks = {
	attach: function (context, settings) {
		$('.view-latest-blocks .views-row').hover(function(){
			//$(this).parent('.view-content').addClass('overlay');
			$(this).children('.views-field-nothing').addClass('vanish');
			$(this).children('.views-field').children('.field-content').children('.latest-title').removeClass('vanish');
			$(this).children('.views-field').children('.field-content').children('.latest-location').removeClass('vanish');
		},
		function() {
			//$(this).parent('.view-content').removeClass('overlay');
			$(this).children('.views-field-nothing').removeClass('vanish');
			$(this).children('.views-field').children('.field-content').children('.latest-title').addClass('vanish');
			$(this).children('.views-field').children('.field-content').children('.latest-location').addClass('vanish');			
		}
		);
	}
}

Drupal.behaviors.photoGallery = {
	attach: function (context, settings) {
		$('.view-photo-gallery .views-row').hover(function(){
			$(this).children('.views-field-title').removeClass('vanish');
		},
		function() {
			$(this).children('.views-field-title').addClass('vanish');
		}
		);
	}
}
// Do not enter code below this line --bmb

})(jQuery, Drupal, this, this.document);