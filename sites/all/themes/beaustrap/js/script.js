
(function ($) {

    // All your code here
    Drupal.behaviors.workHover = {
        attach: function (context, settings) {
            $('.front .view-websites .views-row').hover(
                function() { $(this).find('div.overlay').slideDown("fast"); },
                function() { $(this).find('div.overlay').slideUp("fast"); }
            );
        }
    };

})(jQuery, Drupal);


