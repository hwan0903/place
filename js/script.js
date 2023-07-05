$('.submenu_wrap').hide();
$('nav').mouseover(function(){
    $('.submenu_wrap').stop().slideDown()
});
$('nav').mouseout(function(){
    $('.submenu_wrap').stop().slideUp()
});

$(document).ready(function() {
    // Adjust container height when the page loads
    $('.image-container').height($(window).height());
  
    // Adjust container height when the window is resized
    $(window).resize(function() {
      $('.image-container').height($(window).height());
    });
  });