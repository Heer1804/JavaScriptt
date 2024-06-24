let currentSlide = 0;
let autoSlide = true;
let intervalId;

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

function toggleAutoSlide() {
    autoSlide = !autoSlide;
    if (autoSlide) {
        startAutoSlide();
    } else {
        stopAutoSlide();
    }
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        moveSlide(1);
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

// Initialize the slider
showSlide(currentSlide);
startAutoSlide();

// Add click event listener to toggle auto-slide on image click
const slides = document.querySelector('.slides');
slides.addEventListener('click', toggleAutoSlide);
