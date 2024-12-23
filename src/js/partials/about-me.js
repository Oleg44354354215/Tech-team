import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion__button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentItem = button.parentElement;
      const isActive = currentItem.classList.contains('accordion__item--active');
      const svgUseElement = button.querySelector('svg use');

      if (isActive) {
        currentItem.classList.remove('accordion__item--active');
        svgUseElement.setAttribute('href', './img/sprite.svg#IconClose');
      } else {
        currentItem.classList.add('accordion__item--active');
        svgUseElement.setAttribute('href', './img/sprite.svg#IconOpen');
      }
    });
  });

  const firstItem = document.querySelector('.accordion__item');
  if (firstItem) {
    firstItem.classList.add('accordion__item--active');
    const firstSvgUse = firstItem.querySelector('.accordion__button svg use');
    if (firstSvgUse) {
      firstSvgUse.setAttribute('href', './img/sprite.svg#IconOpen');
    }
  }

  
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: true,
    },
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