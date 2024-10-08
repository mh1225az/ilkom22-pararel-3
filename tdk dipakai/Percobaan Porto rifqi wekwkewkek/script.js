document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".content-section");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      targetSection.classList.add("active");
    });
  });
});
