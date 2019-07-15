
const menuButtonOpen = document.querySelector('.hamburger-menu');
const menuButtonClose = document.querySelector('.mobile-menu__controls-icon');
const menuPosition = document.querySelector('.mobile-menu');


menuButtonOpen.addEventListener('click', () => {
    menuPosition.style.right = '0%';
})
menuButtonClose.addEventListener('click', () => {
    menuPosition.style.right = '-100%'
})
const items = document.querySelectorAll('.mobile .menu__item');
const itemsContacts = document.querySelectorAll('.mobile .contacts__item');

items.forEach(function(item) {
    item.addEventListener('click', () => {
        menuPosition.style.right = '-100%'
    })
})
itemsContacts.forEach(function(item) {
    item.addEventListener('click', () => {
        menuPosition.style.right = '-100%'
    })
})
