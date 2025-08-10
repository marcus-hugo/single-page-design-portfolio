// see: https://web.dev/articles/css-scroll-snap

const carousel = document.querySelector('.carousel');
const scrollContainer = carousel.querySelector('.scroll-container');
let galleryItemSize = scrollContainer.querySelector('.carousel__slide').clientWidth;

carousel.querySelector('.btn-prev').addEventListener('click', scrollToPrevPage);
carousel.querySelector('.btn-next').addEventListener('click', scrollToNextPage);


function scrollToNextPage() {
    galleryItemSize = scrollContainer.querySelector('.carousel__slide').clientWidth;
    scrollContainer.scrollBy(galleryItemSize, 0);
}

function scrollToPrevPage() {
    galleryItemSize = scrollContainer.querySelector('.carousel__slide').clientWidth;
    scrollContainer.scrollBy(-galleryItemSize, 0);
}
