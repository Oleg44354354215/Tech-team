import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-list', {
    duration: 250,
    showMultiple: true,
    collapse: true,
    openOnInit: [0],
    elementClass: 'accordion__item',
    triggerClass: 'accordion__button',
    panelClass: 'accordion__content',
    activeClass: 'accordion__item--active',
  });

  const swiper = new Swiper('.swiper-skills-container', {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.skills-swiper-button',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: true,
      passive: true,
    },
    touchEventsTarget: 'wrapper',
    breakpoints: {
      375: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });
});
