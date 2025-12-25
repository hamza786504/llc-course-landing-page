(function () {
  "use strict";

  var Genius = {
    init: function () {
      this.Basic.init();
    },

    Basic: {
      init: function () {
        Genius.preloader();
      }
    },

    /* Start Of Preloader
    ================================================ */
    preloader: function () {
      jQuery(window).on("load", function () {
        jQuery("#preloader").fadeOut("slow", function () {
          jQuery(this).remove();
        });
      });
    }
    /* End Of Preloader
    ================================================ */
  };

  // Initialize
  Genius.init();

})();
