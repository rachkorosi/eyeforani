const elements = document.querySelectorAll('.scroll-animation');

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);

function scrollToSection() {
    // Get the position of the section to scroll to
    const sectionPosition = document.querySelector('#homeinfo').offsetTop;
 
      document.documentElement.style.scrollBehavior = 'smooth';
  document.body.style.scrollBehavior = 'smooth';

    // Scroll to the section using smooth behavior
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}

