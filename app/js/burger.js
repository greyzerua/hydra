let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let header = document.querySelector(".header")

const closeBurgerMenu = () => {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
  document.body.classList.remove(
    "no-scroll"
  );
  header.style.background = '';
}

const toggleBurgerMenu = () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle(
    "no-scroll",
    menu.classList.contains("active")
  );
  if ( menu.classList.contains("active")) {
    header.style.background = '#302c42';
    header.style.transition = 'background 0.4s';
  } else{
    header.style.background = '';
  }
}

menuBtn.addEventListener("click", toggleBurgerMenu);
