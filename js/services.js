const carouselContainer = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.carousel-container .card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const circles = document.querySelectorAll('.circle');

let currentIndex = 0;
const cardWidth = 625 + 98; // Adjust if your real card/margin differs
const maxIndex = circles.length - 1; // 7 if 8 circles

function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    circles.forEach((circle, idx) => {
        circle.classList.toggle('active', idx === currentIndex);
    });
}

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
    updateCarousel();
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
    updateCarousel();
});

circles.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        currentIndex = idx;
        updateCarousel();
    });
});

updateCarousel();
