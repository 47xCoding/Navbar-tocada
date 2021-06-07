// select item
const btn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

// add event
btn.addEventListener('click', function () {
navLinks.classList.toggle("show-links")
})