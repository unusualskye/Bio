// Dropdown Expand/Collapse
document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const header = dropdown.querySelector(".dropdown-header");
    const content = dropdown.querySelector(".dropdown-content");
    header.addEventListener("click", () => {
      const isOpen = dropdown.classList.contains("open");
      document
        .querySelectorAll(".dropdown.open")
        .forEach((openDropdown) => openDropdown.classList.remove("open"));
      if (!isOpen) dropdown.classList.add("open");
    });
  });
  
  // Smooth Page Transitions with Barba.js
  barba.init({
    transitions: [
      {
        name: "default-transition",
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            duration: 0.5,
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            duration: 0.5,
          });
        },
      },
    ],
  });
  
  // Entry Animations for Dropdown Content with Anime.js
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      if (dropdown.classList.contains("open")) {
        anime({
          targets: dropdown.querySelectorAll(".game"),
          translateY: [50, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
          easing: "easeOutExpo",
        });
      }
    });
  });
  