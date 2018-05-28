
$(document).ready(function(){

  cookie();

/*****This is the menu******/
    //This is the function that open and closes the menu
	$('.hamburger').click(function(mainMenu){
        mainMenu.preventDefault();
        $("nav").toggleClass("slidedown");
        //Here we add a toggleClass to all the children in hamburger, wich is all the lines, so that it will responed to the styling making it to a cross
		$('.hamburger').children().toggleClass('open');
	});

    //For the dropdown menu
    $('.main-menu > li').click(function(e){
        var current = $(".main-menu >li");
        if ($(window).width() < 1036) {
            current.removeClass("open-submenu").find("ul.submenu");

            var openNew = $ (this).find(".inner-li").outerHeight();
            $(this).addClass("open-submenu").find("ul.submenu")
        } else {
            current.removeClass("open-submenu");
        }

    });

/***** This is the register part Enjoy******/

 // Step 1
    // When clicking on continue button
      $("form#step1_form").submit( function(event) {
           event.preventDefault();
           // Variables sets for the validation
             var form = $(this);
             var fields = $(this).find("*[required]");
             var postform = true;

            // Here we call the validated function for each field.
            fields.each(function() {
              var field = $(this)
              var valid = validateField( field );

              // if it was not validated
     		       if ( !valid ) {
        				   postform = false;
      			     }

                 var pass = $("form").find('.password');
                 var conpass = $("form").find('.con_password');


                 if( pass.val() !== conpass.val() ){
                       valid = false;
                       postform = false;
                       pass.closest("label").addClass("error2");
                       conpass.closest("label").addClass("error2");
                 }else{
                   pass.closest("label").removeClass("error2");
                   conpass.closest("label").removeClass("error2");
                 }
             });


             if ( !postform ) {
                 // if any field wasn't validated, stop the POST of the form

               }else {
                 // console.log("postform is true");
                   $(".inner_steps_container").toggleClass("next-step2");
                 }

       });  //end of submit function for step 1

  // Step 2
    // Clicking on Register/submitt button
       $("form#step2_form").submit( function(e) {
            e.preventDefault();

            var form = $(this);
            var fields = $(this).find("*[required]");
            var postform = true;

    // Loop through all the fields
            fields.each(function() {
              var field = $(this)
              var valid = validateField( field );


     		       if ( !valid ) {
        				   postform = false;
      			     }
             });

             if ( !postform ) {

               }else {
                  $(".inner_steps_container").removeClass("next-step2");
                  $(".inner_steps_container").toggleClass("next-step3");
                 }
        });

        // Previous button
        $(".previous").click( function(e) {
          e.preventDefault();
          $(".inner_steps_container").removeClass("next-step2");

        });

        // The blur for all the fields
        $("input[type=text]").blur(function() {
          var blur = $(this);
          blur.closest("label").removeClass("error");
        });

        $("input[type=email]").blur(function() {
          var blur = $(this);
          blur.closest("label").removeClass("error");
        });

        $("input[type=password]").blur(function() {
          var blur = $(this);
          blur.closest("label").removeClass("error");
        });

        $("#profession").blur(function() {
          var blur = $(this);
          blur.closest("label").removeClass("error");
        });
        $("#city").blur(function() {
          var blur = $(this);
          blur.closest("label").removeClass("error");
        });


        // Question mark
          $(".qmark").on("click", function(e) {
            e.preventDefault();
            var questionmark = $(this);
            questionmark.toggleClass("show_qtext");
          });



});


function cookie() {
  //COOKIE
  $(".cookie-box").addClass("slide-up");

  $(".cookie-ok").click( function(event) {
    event.preventDefault();
    $(".cookie-box").addClass("slide-down");
  });
}

/* -- JULIAS JQUERY -- */

function notification() {
  //NOTIFICATION
  $(".notification-box").addClass("slide-up");

  $(".yes-btn").click( function(event) {
    event.preventDefault();
    $(".notification-box").addClass("slide-left");
    setTimeout(xdown, 10000);
  });

  $(".no-btn").click( function(event) {
    event.preventDefault();
    $(".notification-box").addClass("slide-down");
  });

  $(".x").click( function(event) {
    event.preventDefault();
    $(".notification-box").addClass("slide-down-x");
  });
}
//SET TIMEOUT NOTIFICATION
function xdown() {
  $(".notification-box").addClass("slide-down-x");
}

function cookie() {
  //COOKIE
  $(".cookie-box").addClass("slide-up");

  $(".cookie-ok").click( function(event) {
    event.preventDefault();
    $(".cookie-box").addClass("slide-down");
  });
}


// Validation functions
// Function to check if the input is left empty
function validateField( field ) {
  // remove error messages from eventual earlier validation attempts
  field.closest("label").removeClass("error");

  // Get what type of input it is
  var type = field.attr("type");
  // The value written in the field
  var val = field.val();
  // At first we assume everything is ok
  valid = true;


  if ( field.is('select') ) {
       val = field.find("option:selected").attr("value");
       if (val == undefined || val == null || val == "") {
           valid = false;
        }
    }
  // But then we check if the value in the input field is empty
  else if ( type == "text" && (val == undefined || val == null || val == "") ) {
    // If it is empty, it is not valid.
    valid = false;

  } else if ( type == "email" && !validateEmail(val)) {
      valid = false;

    // Check if the password is empty
  } else if ( type == "password" && (val == undefined || val == null || val == "")) {
    valid = false;
  }

  // was the field validated?
  if ( !valid) {
      postform = false;

      //add the error-appareance to that input/label
      field.closest("label").addClass("error");
   }
  return valid;

}

// function to check if email has correct syntax (using regex)
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
