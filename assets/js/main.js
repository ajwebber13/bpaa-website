// =========================
// LOAD NAVBAR COMPONENT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) {
    console.warn("Navbar container not found (#navbar)");
    return;
  }

  fetch("/assets/components/navbar.html")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to load navbar component");
      }
      return res.text();
    })
    .then(html => {
      navbarContainer.innerHTML = html;

      // optional: mark active page AFTER load
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
