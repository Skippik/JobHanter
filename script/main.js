const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');
const closeButton = document.querySelector('.menu__close');





menuButton.addEventListener('click', () => {
    menu.classList.add('is-activ');
    closeButton.classList.add('is-activ');
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('is-activ');
    closeButton.classList.remove('is-activ');
});