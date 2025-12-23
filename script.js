// Minimal interactions: year, mobile nav toggle, smooth scroll
document.addEventListener("DOMContentLoaded", function () {
  // set year
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  if (el) el.textContent = y;

  // mobile nav toggle
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const shown =
        nav.style.display === "flex" || nav.style.display === "block";
      nav.style.display = shown ? "none" : "flex";
      if (window.innerWidth <= 800 && !shown) {
        nav.style.flexDirection = "column";
      } else if (window.innerWidth <= 800) {
        nav.style.flexDirection = "column";
      } else {
        nav.style.flexDirection = "";
      }
    });
    // hide nav when clicking link on mobile
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        if (window.innerWidth <= 800) nav.style.display = "none";
      })
    );
  }

  // smooth scrolling for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// Convert vertical scroll to horizontal scroll
document.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
    window.scrollBy({
      left: e.deltaY,
      behavior: "smooth",
    });
  },
  { passive: false }
);
