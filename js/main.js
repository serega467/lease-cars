
// Это скрипт для работы на странице Choose your car
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');
  tabContent.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}



// Пишем скрипт для гамбургер меню 
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

// Создали функцию, которая следит за кликом по <ul class='menu__list'> (это меню навигации сайта),
// и если клик произошел по нему, то .menu__list присваивается еще один класс
// и получается <ul class='menu__list menu__list--active'> повторный клик
// переопределяет класс навигации меню по сайту на <ul class='menu__list'>

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});



const swiper = new Swiper(".swiper", {
  effect: 'fade', //эффект переключения слайдера
  pagination: {
    el: ".swiper-pagination",
  },
  // Автоплей для слайдера
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});