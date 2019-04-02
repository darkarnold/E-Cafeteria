$(document).ready(function(event){
  // Get the id of the sign up  button on the overlay container
  const signUpButton = document.getElementById('Signup');
  // Get the id of the ghost login button on the overlay container
  const loginButton = document.getElementById("Login");
  //get the id of the container
  const container = document.getElementById("container");

  $("#Signup").click(function(){
  $(".overlay-right").animate({left :'-100%'});
  $(".sign-up-container").show();

    });

/*
    $("#Login").click(function(){
      $("#left").slideToggleWidth();
    });

  jQuery.fn.extend({
    slideRight: function() {
      return this.each(function() {
        jQuery(this).animate({width: 'show'});
      });
    },
    slideLeft: function() {
      return this.each(function() {
        jQuery(this).animate({width: 'hide'});
      });
    },
    slideToggleWidth: function() {
      return this.each(function() {
        var el = jQuery(this);
        if (el.css('display') == 'none') {
          el.slideRight();
        } else {
          el.slideLeft();
        }
      });
    }
  });*/

});



/*
jQuery('.toggleWidth').click(function () {
	jQuery('#homeTown').slideToggleWidth();
});

jQuery.fn.extend({
  slideRight: function() {
    return this.each(function() {
      jQuery(this).animate({width: 'show'});
    });
  },
  slideLeft: function() {
    return this.each(function() {
      jQuery(this).animate({width: 'hide'});
    });
  },
  slideToggleWidth: function() {
    return this.each(function() {
      var el = jQuery(this);
      if (el.css('display') == 'none') {
        el.slideRight();
      } else {
        el.slideLeft();
      }
    });
  }
});

*/
