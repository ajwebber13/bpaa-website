// =========================
// LOAD NAVBAR COMPONENT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) {
    console.warn("Navbar container not found (#navbar)");
    return;
  }

  fetch("assets/components/navbar.html")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to load navbar component");
      }
      return res.text();
    })
    .then(html => {
      navbarContainer.innerHTML = html;

      // =========================
      // ACTIVE LINK HIGHLIGHT
      // =========================
      const links = document.querySelectorAll(".nav-link");

      links.forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => {
      console.error("Navbar load error:", err);
    });
});


// =========================
// SCROLL REVEAL ANIMATION
// (works with .leader-card, .premium-card, etc.)
// =========================

function revealOnScroll() {
  const elements = document.querySelectorAll('.leader-card, .premium-card, .fade-up');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// =========================
// HERO FADE-IN EFFECT
// =========================

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");
  if (hero) {
    hero.classList.add("fade-up");
  }
});
