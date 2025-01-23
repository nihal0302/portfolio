window.addEventListener("DOMContentLoaded", function() {
  var h1 = document.querySelector(".header-center-1 h1");
  var p = document.querySelector(".header-center-1 p");
  h1.classList.add("show");
  p.classList.add("show");
  });

window.onload = function(){
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')

  menu_btn.addEventListener('click',function(){
  	menu_btn.classList.toggle('is-active');
  	mobile_menu.classList.toggle('is-active');
  });

}


document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const items = Array.from(document.querySelectorAll('.carousel-item'));
  const itemWidth = items[0].offsetWidth + 20; // Include gap (20px in this case)

  // Clone items initially to create a seamless loop
  items.forEach(item => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
  });

  // Function to check and append items dynamically
  function ensureInfiniteLoop() {
      const carouselWidth = carousel.scrollWidth;
      const containerWidth = document.querySelector('.carousel-container').offsetWidth;

      // If the carousel's total width is less than twice the container's width, keep adding clones
      if (carouselWidth < containerWidth * 2) {
          items.forEach(item => {
              const clone = item.cloneNode(true);
              carousel.appendChild(clone);
          });
      }
  }

  // Check and ensure infinite loop during animation
  setInterval(ensureInfiniteLoop, 1000); // Check every second
});









