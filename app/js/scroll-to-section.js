
const scrollToSectionByLink = (event) => {
  event.preventDefault();

  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
      change.target.classList.add('element-hide');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.how-to__build, .description__wrapper, .about-us__items');

for (let elm of elements) {
  observer.observe(elm);
}
