$(function() {
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 120)
      $('#navi').stop().animate({'opacity':'0.6'},300);
    else
      $('#navi').stop().animate({'opacity':'1'},300);
  });

$('#navi').hover(
    function (e) {
      var scrollTop = $(window).scrollTop();
      if(scrollTop != 0){
        $('#navi').stop().animate({'opacity':'1'},300);
      }
      },
      function (e) {
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
          $('#navi').stop().animate({'opacity':'0.4'},300);
        }
    }
  );
});
