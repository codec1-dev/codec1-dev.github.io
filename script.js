// =====================
// Theme Toggle
// =====================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
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

    // Try iframe first
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";

    // Clear old content
    viewer.innerHTML = "";
    viewer.appendChild(iframe);

    // Handle blocked iframes
    iframe.addEventListener("error", () => {
      viewer.innerHTML = `
        <div class="preview">
          <h2>Preview Unavailable 🚫</h2>
          <p>This site cannot be embedded here.</p>
          <a href="${url}" target="_blank" class="open-btn">Open Site</a>
        </div>
      `;
    });
  });
});
