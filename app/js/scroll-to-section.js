
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

const elementsConfig = [
  {
    elementSelector: '.how-to__build',
    animateOnce: true
  },
  {
    elementSelector: '.description__wrapper'
  },
  {
    elementSelector: '.about-us__items'
  },
  {
    elementSelector: '.introduction__content'
  },
  {
    elementSelector: '.technologies__content-wrap'
  },
]


function onEntry(entry) {
  entry.forEach(change => {
    const className = change.target.className;
    const elemConfig = elementsConfig.find(el => className.includes(el.elementSelector.substring(1)))
    const shouldRemoveClass = !change.isIntersecting && elemConfig.isAnimated && !elemConfig.animateOnce;
    if (change.isIntersecting) {
      if (elemConfig) {
        elemConfig.isAnimated = true;
      }
      change.target.classList.add('element-show');
    } else if (shouldRemoveClass) {
      change.target.classList.remove('element-show');
    }
  });
}

let options = { threshold: [0, 0.9] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(elementsConfig.map(el => el.elementSelector).join());

for (let elm of elements) {
  observer.observe(elm);
}