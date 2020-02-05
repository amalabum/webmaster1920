$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() < 60 ) {
     $("nav").removeClass("navbg");
/*    This is me attempting to make the colors of the navbar to fit the color of what section its over
   } else if   ($(document).scrollTop() > 630 && $(document).scrollTop() < 830) {
      $("nav").removeClass("navbg");
      $("nav").addClass("navbg2");

   } else if   ($(document).scrollTop() > 1230 && $(document).scrollTop() < 1390) {
      $("nav").removeClass("navbg");
      $("nav").addClass("navbg3");
*/
   } else {
     $("nav").addClass("navbg");

    }
  });


  $("#section2").hover(function(){
    alert("You entered p1!");
  });

});
