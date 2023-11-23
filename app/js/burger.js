let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle(
    "no-scroll",
    menu.classList.contains("active")
  );
});
