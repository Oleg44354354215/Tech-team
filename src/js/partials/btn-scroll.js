const ScrollingBtb = document.querySelector('#BtnScrollTop');

ScrollingBtb.addEventListener('click', makeScrollTop);

window.onscroll = () => {
  if (window.scrollY > 800) {
    ScrollingBtb.classList.remove('scroll-hidden');
  } else {
    ScrollingBtb.classList.add('scroll-hidden');
  }
};

function makeScrollTop() {
  window.scrollTo(0, 0);
}
