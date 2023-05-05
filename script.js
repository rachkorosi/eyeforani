
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
    }, 400);
    $('header .header').fadeOut("slow");

  
   
  });

});

function fadeIn() {
  const fadeIns = document.querySelectorAll('.fade-in-item');
  fadeIns.forEach((fadein, index) => {
    if (isElementVisible(fadein)) {
      fadein.classList.add('visible');
    } else {
      fadein.classList.remove('visible');
    }
  });
}

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
}

window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);
