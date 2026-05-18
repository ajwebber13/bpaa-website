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
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) return;

  fetch("assets/components/navbar.html")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to load navbar");
      }
      return res.text();
    })
    .then(html => {
      navbarContainer.innerHTML = html;

      // =========================
      // ACTIVE LINK HANDLING
      // =========================
      const currentPage = window.location.pathname.split("/").pop();

      document.querySelectorAll(".nav-links a").forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => {
      console.error("Navbar load failed:", err);
    });
});
      // active link
      document.querySelectorAll(".nav-link").forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) return;

  fetch("assets/components/navbar.html")
    .then(res => res.text())
    .then(data => {
      navbarContainer.innerHTML = data;
    })
    .catch(err => console.error("Navbar load failed:", err));
});
