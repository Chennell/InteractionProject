
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

  /* -- JULIAS JQUERY -- */

  //var education = "education.html";
  //var pathname = window.alert(this.href.substr(this.href.lastIndexOf('/') + 1));

  // if (pathname == education){
  //     notification();
  // }

  //var href = location.href;
  //console.log(href.match(/([^\/]*)\/*$/)[1]);

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
});
