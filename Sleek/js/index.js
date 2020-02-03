$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 60) {
        $("nav").addClass("navbg");

    } else {
        $("nav").removeClass("navbg");
    }
  });
});
