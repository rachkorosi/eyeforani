$(document).ready(function() {

  // Handle clicks on links that should scroll to the target section
  $('.scroll-link').click(function(event) {
    event.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  // Handle clicks on links that shouldn't scroll (about, videos, stickers)
  $('.no-scroll-link').click(function(event) {
    event.preventDefault();
    const target = $(this).attr('href');
    setTimeout(function() {
      window.location.href = target;
    }, 500);
    $('header .header').fadeOut();
    $('header h1').animate({
      marginTop: '-605px'
    }, 1000);
  });

});



