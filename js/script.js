// for slider
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");

let currentSlide = 1;

showSlide(currentSlide); // show first slide

// next control
function nextSlide() {
  currentSlide = currentSlide + 1;
  showSlide(currentSlide);
}

// previous control
function previousSlide() {
  currentSlide = currentSlide - 1;
  showSlide(currentSlide);
}

prevButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

function showSlide(n) {
  if (n > slides.length) {
    currentSlide = 1;
  }
  if (n < 1) {
    currentSlide = slides.length;
  }
  // remove .active from the previous dot
  dots.forEach((dot) => dot.classList.remove("active"));
  // remove the old slide
  slides.forEach((slide) => (slide.style.display = "none"));
  // show current slide
  slides[currentSlide - 1].style.display = "block";
  // add active class to the current dot
  dots[currentSlide - 1].classList.add("active");
}

// for mobile nav
const hamburgerOpen = document.querySelector(".hamburger__open");
const hamburgerClose = document.querySelector(".hamburger__close");
const mobileNav = document.querySelector(".mobile-nav");
const backdrop = document.querySelector(".backdrop");

hamburgerOpen.addEventListener("click", () => {
  console.log("hamOpen");
  mobileNav.classList.add("show");
  backdrop.classList.add("show");
  hamburgerOpen.classList.add("close");
  hamburgerClose.classList.add("show");
});

backdrop.addEventListener("click", () => {
  console.log("back");
});

hamburgerClose.addEventListener("click", () => {
  console.log("hamclose");
  mobileNav.classList.remove("show");
  backdrop.classList.remove("show");
  hamburgerOpen.classList.remove("close");
  hamburgerClose.classList.remove("show");
});
