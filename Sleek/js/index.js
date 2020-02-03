$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() < 60) {
     $("nav").removeClass("navbg");

    } else {
     $("nav").addClass("navbg");

    }
  });
});
