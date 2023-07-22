const slideContainer = document.querySelector('.slide-container');
const slides = slideContainer.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;

function showSlide(index) {
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
    slideIndex = index;
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        showSlide(slideIndex + 1);
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        showSlide(slideIndex - 1);
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


