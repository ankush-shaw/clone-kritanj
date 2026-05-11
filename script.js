// Mobile navigation toggle.
const navToggle = document.querySelector("[data-menu-toggle]");
const navMenu = document.querySelector("[data-menu]");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after choosing a link.
document.querySelectorAll("[data-menu] a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the viewport for a polished landing-page feel.
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

// Add a subtle shadow state to the header once the page starts scrolling.
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
});

// Keep the demo form on-page for portfolio previews.
document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
});
