"use strict";

// Mobile navigation
const btnNavE1 = document.querySelector(".btn-mobile-nav");
const headerE1 = document.querySelector(".header");

btnNavE1.addEventListener("click", function () {
  headerE1.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      // Scroll back to top or to an external website
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const selectionE1 = document.querySelector(href);
        if (selectionE1) {
          selectionE1.scrollIntoView({ behavior: "smooth" });
        }
      }

      // Close navigation for internal links
      if (link.classList.contains("main-nav-link")) {
        headerE1.classList.toggle("nav-open");
      }
    } else if (href.startsWith("http://") || href.startsWith("https://")) {
      // Navigate to an external website
      window.open(href, '_blank');
    }
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

