// =========================================
// PORTFOLIO — interacciones
// =========================================

// Actualiza automáticamente el año del pie de página.
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Menú desplegable para móviles.
const menuButton = document.getElementById("menuButton");
const navlinks = document.getElementById("navlinks");

if (menuButton && navlinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navlinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al elegir una sección.
  navlinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navlinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Animaciones suaves al aparecer las secciones en pantalla.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
} else {
  // Alternativa para navegadores antiguos.
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
  });
}
