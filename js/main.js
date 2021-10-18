$(function(){
    // SET THE DIV TO THE WINDOW HEIGHT
    $('.header').css({'height':($(window).height())+'px'});
    // RESIZE THE HEIGHT IF THE WINDOW IS RESIZED
    $(window).resize(function(){
      $('.header').css({'height':($(window).height())+'px'});
    });
  });

  $(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })