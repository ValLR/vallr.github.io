$(document).ready(function(){      
  var scroll_start = 0;
  var startchange = $('#navbar');
  var offset = startchange.offset();
   if (startchange.length){
  $(document).scroll(function() {
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $("nav").css('background-color', '#27363A');
         $(".nav-link").css("color","whitesmoke");
      }  else {
         $('nav').css('background-color', 'transparent');
      }
  });
   }
});