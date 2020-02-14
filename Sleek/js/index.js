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

    // var sec2 = $("#section2")[0];
    // var notSeen = true;
    // var secTop = 0;
    // var imageTop = 0;
    // if(checkVisible(sec2)){
    //   if(notSeen){
    //     secTop = $(document).scrollTop();
    //     imageTop = secTop;
    //     notSeen = false;
    //   }
    //   var image = $("#parallax-child")[0];
    //   imageTop += ($(document).scrollTop() - secTop);
    //   image.style.top = imageTop + "px";
    //
    // }

  });

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


});
