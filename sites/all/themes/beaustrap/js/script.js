
(function ($) {

/**** All your code here ****/

/* Example Function (Copy/Paste Lines 8-12)

    Drupal.behaviors.exampleFunction = {
        attach: function (context, settings) {
            // Insert jQ Function Here
        }
    };
 */

    // Add Contact Logos below Work History
    Drupal.behaviors.contactLogos = {
        attach: function (context, settings) {
            var contactAppend = '<div class="contact-logos">' +
                '<a href="https://www.linkedin.com/in/beauboehner" target="_blank"><i class="fa fa-linkedin fa-4x"></i></a>' +
                '<a href="https://www.drupal.org/u/beaukc" target="_blank"><i class="fa fa-drupal fa-4x"></i></a>' +
                '<a href="https://github.com/beauboehner" target="_blank"><i class="fa fa-github fa-4x"></i></a>' +
                '</div>';
            $('.front .block-system').after(contactAppend);
        }
    };

    // Hover Effect on Website blocks
    Drupal.behaviors.workHover = {
        attach: function (context, settings) {
            if (screen.width > 560) {
                $('.front .view-websites .views-row').hover(
                    function () {
                        $(this).find('div.overlay').slideDown("fast");
                    },
                    function () {
                        $(this).find('div.overlay').slideUp("fast");
                    }
                );
            }
        }
    };

    Drupal.behaviors.skynetCheck = {
        attach: function (context, settings) {
            $('.webform-client-form-140 .captcha label').text('Are you Skynet???');
        }
    };

    // Change Text on Contact Form button
    Drupal.behaviors.contactSubmit = {
        attach: function (context, settings) {
            $('.webform-client-form-140 input.webform-submit').prop('value', 'BOOSH!');
        }
    };

    Drupal.behaviors.fallEurope = {
        attach: function (context, settings) {
            var finalCountdown = '<div class="europe-vid"><iframe width="420" height="315" src="https://www.youtube.com/embed/9jK-NcRmVcw" frameborder="0" allowfullscreen></iframe></div>';
            $('.page-node-117 .field-name-body').after(finalCountdown);
        }
    };

    /**** Nothing Below Here ****/

})(jQuery, Drupal);

