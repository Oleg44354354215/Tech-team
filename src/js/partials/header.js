const burgerMenu = document.querySelector('.burger-menu');
const modalNavigation = document.querySelector('.modal-navigation');
const closeButton = document.querySelector('.close-button');
const modalMenu = document.querySelector('.modal-menu');
const modalButton = document.querySelector('.modal-order-btn');
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menuLinks = menuList.querySelectorAll('a');

// modal window open
function openModal() {
  modalNavigation.style.display = 'flex';
  setTimeout(() => {
    modalNavigation.classList.add('active');
  }, 10);
  document.body.classList.add('no-scroll');
}

// modal window close
function closeModal() {
  modalNavigation.classList.remove('active');
  setTimeout(() => {
    modalNavigation.style.display = 'none';
  }, 250);
  document.body.classList.remove('no-scroll');
}

burgerMenu.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

// modal window close
document.addEventListener('click', e => {
  if (
    !modalNavigation.contains(e.target) &&
    !burgerMenu.contains(e.target) &&
    modalNavigation.classList.contains('active')
  ) {
    closeModal();
  }
});

// modal window menu
modalMenu.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    window.location.href = href;
    closeModal();
  }
});

// modal window close after tap on bottom
modalButton.addEventListener('click', closeModal);

// open-close menu
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  menuList.classList.toggle('visible');
});

// close menu if you miss a click
document.addEventListener('click', e => {
  if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
    menuList.classList.remove('visible');
  }
});

// close menu after tap on section from menu
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuList.classList.remove('visible');
  });
});
