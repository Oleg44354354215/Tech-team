'use strict'

import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const nextButton = document.querySelector(".projects-swiper-next-button");
const prevButton = document.querySelector(".projects-swiper-prev-button");


const swiper = new Swiper('.swiper-projects-container', {
    modules: [Navigation,Keyboard, Mousewheel], 
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    }, 
    spaceBetween: 100,
    slidesPerView: 1, 
    speed: 800,
    keyboard: {
      enabled: true, 
      onlyInViewport: true, 
    },
    // wrapperClass: 'projects-wiper-wrapper',
    mousewheel: {
        forceToAxis: true, 
    },
    touchEventsTarget: 'wrapper', // Для сенсорного екрану
    createElements: true,
  });





// const swiper = new Swiper('.swiper-projects-container', {
//     centerInsufficientSlides: true,
//     centeredSlides: true,
//     centeredSlidesBounds: true,
//     createElements: true,
//     slidesPerView: 1,
//     spaceBetween: 100,
//     speed: 500,
// });

// nextButton.addEventListener("click", handleNextClick);
// prevButton.addEventListener("click", handlePrevClick);
// swiper.on('slideChange', handleSlideChanged);

// handleSlideChanged();

// function handleNextClick(event) {
//     if (swiper.allowSlideNext) {
//         swiper.slideNext();
//     }
// }

// function handlePrevClick(event) {
//     if (swiper.allowSlidePrev) {
//         swiper.slidePrev();
//     }
// }

// function handleSlideChanged() {
//     prevButton.disabled = swiper.isBeginning;
//     nextButton.disabled = swiper.isEnd;
// }
