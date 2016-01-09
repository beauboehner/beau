
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

    Drupal.behaviors.contactSubmit = {
        attach: function (context, settings) {
            $('.webform-client-form-140 input.webform-submit').prop('value', 'BOOSH!');
        }
    };


})(jQuery, Drupal);


