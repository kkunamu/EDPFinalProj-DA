let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');

    slides.forEach((slide) => {
        slide.style.opacity = 0;
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.opacity = 1;

    setTimeout(showSlides, 4000);
}

showSlides();
