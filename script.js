const toggle = document.querySelector("input");
const header = document.querySelector("header");
const heading = document.querySelector("h1");

toggle.addEventListener("input", () => {
  header.classList.toggle("dark-mode-header");
  heading.classList.toggle("dark-mode-text");
});
