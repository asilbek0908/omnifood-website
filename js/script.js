// Current Year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
// console.log(currentYear);
yearEl.textContent = currentYear;

// Navigation bar

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling

// const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//   });
// });
