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
      change.target.classList.add('svg-visible');
    } else {
      change.target.classList.remove('svg-visible');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.how-to');
for (let elm of elements) {
  observer.observe(elm);
}