$(function(){
  $('#concept p').css("opacity","0");
  $(window).scroll(function (){
    $('#concept p').each(function(){
      var newPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > newPos - windowHeight + 200){
        $(this).animate({
          "opacity": "1"
        }, 1200);
      }
    });
  });
});
