// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const viewTransformBtn = document.getElementById('viewTransformBtn');
//     const photoSlider = document.getElementById('photoSlider');
//     const slides = document.querySelector('.slides');
//     const prevBtn = document.querySelector('.prev');
//     const nextBtn = document.querySelector('.next');

//     let slideIndex = 0;

//     viewTransformBtn.addEventListener('click', () => {
//         photoSlider.classList.toggle('hidden');
//     });

//     const showSlide = (index) => {
//         const totalSlides = document.querySelectorAll('.slide').length;
//         if (index >= totalSlides) {
//             slideIndex = 0;
//         } else if (index < 0) {
//             slideIndex = totalSlides - 1;
//         } else {
//             slideIndex = index;
//         }
//         slides.style.transform = `translateX(-${slideIndex * 100}%)`;
//     };

//     prevBtn.addEventListener('click', () => {
//         showSlide(slideIndex - 1);
//     });

//     nextBtn.addEventListener('click', () => {
//         showSlide(slideIndex + 1);
//     });

//     // Optional: Auto-slide every 5 seconds
//     setInterval(() => {
//         showSlide(slideIndex + 1);
//     }, 5000);
// });
function display () {
    let slider = document.getElementById('all')
    slider.classList.toggle('hidden');
}