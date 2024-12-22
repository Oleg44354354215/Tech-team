import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import axios from 'axios';

const list = document.querySelector('.swiper-wrapper');
const URL = 'https://portfolio-js.b.goit.study/api/reviews';

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
    <div class="swiper-slide error">
      <p class="glush-reviews">Not found</p>
    </div>
  `;
}

getReviews()
  .then((data) => {
    console.log(data);
    list.innerHTML = createMarkup(data); // Додаємо слайди у `swiper-wrapper`
  })
  .catch((error) => {
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
        </li>
    `
    )
    .join('');
}

const swiper = new Swiper('.swiper', {
    modules: [Navigation], // Модуль для навігації
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled', // Клас для неактивних кнопокі
    },
    loop: false, // Вимикаємо нескінченну прокрутку
    slidesPerView: 1, // Кількість слайдів для телефону
    spaceBetween: 16, // Відстань між слайдами
    breakpoints: {
      768: {
        slidesPerView: 2, 
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4, // Для десктопа
        spaceBetween: 16,
      },
    },
  });