let scrollAmount = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  const itemWidth = carousel.querySelector('.carousel-item').clientWidth;
  scrollAmount += direction * itemWidth;

  if (scrollAmount < 0) {
    scrollAmount = 0;
  } else if (scrollAmount > scrollWidth) {
    scrollAmount = scrollWidth;
  }

  carousel.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}


