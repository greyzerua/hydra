let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let header = document.querySelector(".header")
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle(
    "no-scroll",
    menu.classList.contains("active")
  );
  if ( menu.classList.contains("active")) {
    header.style.background = '#302c42';
    header.style.transition = 'background 0.6s';
  } else{
    header.style.background = '';
  }
});
