// script.js
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Automatically move slides every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

// Initialize the slider
showSlide(currentSlide);
