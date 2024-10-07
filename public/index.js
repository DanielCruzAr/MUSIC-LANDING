const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const logo = document.querySelector('#logo');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

logo.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/cruzard_/';
});