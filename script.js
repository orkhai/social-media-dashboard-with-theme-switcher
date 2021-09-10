const toggle = document.querySelector("input");
const header = document.querySelector("header");
const body = document.querySelector("body");
const heading = document.querySelector("h1");
const followerCount = document.querySelectorAll("h3");
const smCards = document.querySelectorAll(".sm-accounts div");
const overviewCards = document.querySelectorAll(".overview-card");
const overviewCount = document.querySelectorAll(".overview-card p");

toggle.addEventListener("input", () => {
  header.classList.toggle("dark-mode-header");
  heading.classList.toggle("dark-mode-text");
  body.classList.toggle("dark-mode-body");
  for (const card of smCards) {
    card.classList.toggle("dark-mode-card");
  }
  for (const count of followerCount) {
    count.classList.toggle("dark-mode-text");
  }
  for (const overview of overviewCards) {
    overview.classList.toggle("dark-mode-card");
  }
  for (const view of overviewCount) {
    view.classList.toggle("dark-mode-text");
  }
});
