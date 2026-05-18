document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) {
    console.warn("Navbar container not found (#navbar)");
    return;
  }

  fetch("/assets/components/navbar.html")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to load navbar");
      }
      return res.text();
    })
    .then(data => {
      navbarContainer.innerHTML = data;
    })
    .catch(err => {
      console.error("Navbar load error:", err);
    });
});
