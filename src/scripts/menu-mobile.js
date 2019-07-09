window.onload = () => {
    const menuButtonOpen = document.querySelector('.hamburger-menu');
    const menuButtonClose = document.querySelector('.mobile-menu__controls-icon');
    const menuPosition = document.querySelector('.mobile-menu');
    menuButtonOpen.addEventListener('click', () => {
        menuPosition.style.right = '0%';
    })
    menuButtonClose.addEventListener('click', () => {
        menuPosition.style.right = '-100%'
    })
}