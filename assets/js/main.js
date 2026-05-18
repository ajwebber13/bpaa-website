// =========================
// LOAD NAVBAR COMPONENT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) return;

  fetch("assets/components/navbar.html")
    .then(res => res.text())
    .then(html => {
      navbarContainer.innerHTML = html;

      // active link
      document.querySelectorAll(".nav-link").forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    });
});
