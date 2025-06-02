document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll(".section");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.dataset.section;

      sections.forEach(section => {
        section.classList.remove("active");
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});

