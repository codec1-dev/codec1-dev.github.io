// =====================
// Theme Toggle
// =====================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  body.classList.remove("dark");
  themeToggle.textContent = "🌙";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// =====================
// Viewer (iframe preview)
// =====================
const viewer = document.getElementById("viewer");

document.querySelectorAll(".link-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-url");

    // Build iframe preview
    viewer.innerHTML = `
      <div class="preview">
        <h2>Preview</h2>
        <iframe src="${url}" frameborder="0"></iframe>
        <a href="${url}" target="_blank" class="open-btn">Open in New Tab</a>
      </div>
    `;
  });
});
