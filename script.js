// Initialize Feather Icons
feather.replace();

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem("theme") || "light";
html.classList.toggle("dark", savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  const theme = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  feather.replace(); // Re-render icons after theme change
});

// Mobile Menu Toggle with Smooth Animation
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Add CSS transition styles
mobileMenu.style.transition = "all 0.3s ease-in-out";
mobileMenu.style.transformOrigin = "top";

mobileMenuButton.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    // Show menu
    mobileMenu.classList.remove("hidden");
    mobileMenu.style.transform = "scaleY(0)";
    mobileMenu.style.opacity = "0";

    // Trigger animation
    requestAnimationFrame(() => {
      mobileMenu.style.transform = "scaleY(1)";
      mobileMenu.style.opacity = "1";
    });
  } else {
    // Hide menu with animation
    mobileMenu.style.transform = "scaleY(0)";
    mobileMenu.style.opacity = "0";

    // Add hidden class after animation completes
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300); // Match transition duration
  }
});

// Close mobile menu when clicking on links
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Animate close
    mobileMenu.style.transform = "scaleY(0)";
    mobileMenu.style.opacity = "0";

    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navigation with smooth transition
const nav = document.querySelector("nav");
nav.style.transition = "box-shadow 0.2s ease-in-out";

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("shadow-md");
  } else {
    nav.classList.remove("shadow-md");
  }
});
