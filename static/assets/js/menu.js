/**
 * JS for responsive menu
 */


(function ($) {
  "use strict";
  $(document).ready(function(){

      $('.menu-readium').click(function() {
        $('.menu').toggleClass('desktop-show')
        $('.menu').toggleClass('mobile-show')
        $('.menu-item-desktop').toggleClass('desktop-show')
        $('.menu-item-mobile').toggleClass('mobile-show')
        $('.menu-fa').toggleClass('desktop-bars-icon')
        $('.menu-fa').toggleClass('desktop-times-icon')
        $('.menu-fa').toggleClass('mobile-bars-icon')
        $('.menu-fa').toggleClass('mobile-times-icon')
      });

  });
}(jQuery));
