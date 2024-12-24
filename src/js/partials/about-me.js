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
      const content = currentItem.querySelector('.accordion__content');
      const isActive = currentItem.classList.contains('accordion__item--active');
      const svgUseElement = button.querySelector('svg use');

      if (isActive) {        
        content.style.maxHeight = null;
        currentItem.classList.remove('accordion__item--active');
        svgUseElement.setAttribute('href', './img/sprite.svg#IconClose');
      } else {        
        content.style.maxHeight = `${content.scrollHeight}px`;
        currentItem.classList.add('accordion__item--active');
        svgUseElement.setAttribute('href', './img/sprite.svg#IconOpen');
      }
    });
  });

  
  const firstItem = document.querySelector('.accordion__item');
  if (firstItem) {
    const firstContent = firstItem.querySelector('.accordion__content');
    firstItem.classList.add('accordion__item--active');
    firstContent.style.maxHeight = `${firstContent.scrollHeight}px`;
    const firstSvgUse = firstItem.querySelector('.accordion__button svg use');
    if (firstSvgUse) {
      firstSvgUse.setAttribute('href', './img/sprite.svg#IconOpen');
    }
  }
  
  const nextButton = document.querySelector(".swiper-next-buttonn");

  const swiper = new Swiper('.swiper', {
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
    /*createElements: true,*/
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