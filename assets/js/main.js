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
    })
    .catch(err => {
      console.error("Navbar load error:", err);
    });
});
