// =======================
// MENU BURGER
// =======================
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("active");
});

// Fermer menu quand on clique sur un lien
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    nav.classList.remove("active");
  });
});

// =======================
// SCROLL SPY
// =======================
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav a");
const header = document.querySelector(".header");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });

  header.classList.toggle("scrolled", scrollY > 20);
  backToTop.classList.toggle("visible", scrollY > 600);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =======================
// SCROLL REVEAL
// =======================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach(el =>
  observer.observe(el)
);
