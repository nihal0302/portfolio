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









