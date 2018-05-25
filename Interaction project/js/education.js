$(document).ready(function() {

  notification();

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

  function cookie() {
    //COOKIE
    $(".cookie-box").addClass("slide-up");

    $(".cookie-ok").click( function(event) {
      event.preventDefault();
      $(".cookie-box").addClass("slide-down");
    });
  }

});

//SET TIMEOUT NOTIFICATION
function xdown() {
  $(".notification-box").addClass("slide-down-x");
}
