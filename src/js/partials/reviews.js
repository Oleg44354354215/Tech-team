import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
const list = document.querySelector('.section-reviews .swiper-wrapper');
const URL = 'https://portfolio-js.b.goit.study/api/reviews';

const nextButton = document.querySelector('.swiper-next-buttonn');
const prevButton = document.querySelector('.swiper-prev-buttonn');

async function getReviews() {
  try {
    const { data } = await axios(URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.error('Error reviews:', error.message);
    list.innerHTML = createError();
  }
}
function createError() {
  return `
    <li class="swiper-slide error">
      <p class="glush-reviews">Not found</p>
    </li>
  `;
}
getReviews()
  .then(data => {
    console.log(data);
    list.innerHTML = createMarkup(data); // Додаємо слайди у `swiper-wrapper`
  })
  .catch(error => {
    console.error(error);
  });
function createMarkup(arr) {
  return arr
    .map(
      ({ id, author, avatar_url, review }) => `
        <li class="list-item swiper-slide">
          <img src="${avatar_url}" alt="${author}" class="author-item-img" />
          <h3 class="author-name">${author}</h3>
          <p class="reviews-descreiption">${review}</p>
        </li>`
    )
    .join('');
}
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  loop: false,
  spaceBetween: 16,
  slidesPerView: 1,
  speed: 800,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
  touchEventsTarget: 'container', // Для сенсорного екрану
  createElements: true,
});
