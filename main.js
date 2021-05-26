const calendar = document.querySelector('.cal-input');

datepicker(calendar);

const menuBtn = document.querySelector('.menu-btn');

const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('toggle-list');
  menuBtn.classList.toggle('toggle-bar');
})