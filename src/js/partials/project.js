'use strict'

import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';

const nextButton = document.querySelector(".swiper-next-button");
const prevButton = document.querySelector(".swiper-prev-button");
const swiper = new Swiper('.swiper-container', {
    centerInsufficientSlides: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    createElements: true,
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 500,
});

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);
swiper.on('slideChange', handleSlideChanged);

handleSlideChanged();

function handleNextClick(event) {
    if (swiper.allowSlideNext) {
        swiper.slideNext();
    }
}

function handlePrevClick(event) {
    if (swiper.allowSlidePrev) {
        swiper.slidePrev();
    }
}

function handleSlideChanged() {
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
}
