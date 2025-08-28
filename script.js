const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

 const links = document.querySelectorAll('.links a');
    const viewer = document.getElementById('viewer');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const url = link.getAttribute('data-url');

        // Clear viewer
        viewer.innerHTML = "";

        // Try loading iframe
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.onload = () => {
          viewer.innerHTML = "";
          viewer.appendChild(iframe);
        };

        // If iframe fails (blocked by X-Frame-Options)
        iframe.onerror = () => {
          viewer.innerHTML = `
            <div class="preview">
              <h2>Preview not available</h2>
              <p>This site doesn’t allow embedding.</p>
              <a href="${url}" target="_blank">
                <button class="btn-open">Open Site</button>
              </a>
            </div>
          `;
        };

        viewer.appendChild(iframe);
      });
    });