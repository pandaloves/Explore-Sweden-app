"use strict";

// Mobile navigation
const btnNavE1 = document.querySelector(".btn-mobile-nav");
const headerE1 = document.querySelector(".header");

btnNavE1.addEventListener("click", function () {
  headerE1.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const selectionE1 = document.querySelector(href);
      selectionE1.scrollIntoView({ behavior: "smooth" });
    }

    // Close navigation
    if (link.classList.contains("main-nav-link"))
      headerE1.classList.toggle("nav-open");
  });
});

// Slide show
function slideshow(n) {
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add(" active");
}

let slideIndex = 1;
slideshow(slideIndex);

function plusSlides(n) {
  slideshow(slideIndex += n);
}

function currentSlide(n) {
  slideshow(slideIndex = n);
}

