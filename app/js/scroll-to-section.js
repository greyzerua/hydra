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