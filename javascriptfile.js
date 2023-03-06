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



let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "grid";
  }
  scrollProgress.addEventListener("click", () => {
      window.scrollTo({
        top: 23270, // Change this value to your desired position
        behavior: 'smooth'
      });
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;






