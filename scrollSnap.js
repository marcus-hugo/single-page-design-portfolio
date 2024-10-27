// see: https://web.dev/articles/css-scroll-snap

const carousel = document.querySelector('.carousel');
const scrollContainer = carousel.querySelector('.scroll-container');
const galleryItemSize = scrollContainer.querySelector('li').clientWidth;

carousel.querySelector('.btn-prev').addEventListener('click', scrollToPrevPage);
carousel.querySelector('.btn-next').addEventListener('click', scrollToNextPage);


function scrollToNextPage() {
    scrollContainer.scrollBy(galleryItemSize, 0);
}

function scrollToPrevPage() {
    scrollContainer.scrollBy(-galleryItemSize, 0);
}
