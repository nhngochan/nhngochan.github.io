// Dark/Light mode
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");

    document.documentElement.style.setProperty("--bg", dark ? "#1e1e1e" : "#ffffff");
    document.documentElement.style.setProperty("--text", dark ? "#f0f0f0" : "#333333");

    toggle.innerHTML = dark ? "🌙" : "☀️";
  });
}

// Simple form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
}
