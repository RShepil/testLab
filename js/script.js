// Бургер-меню
const iconMenu = document.querySelector('.menu_icon')
if (iconMenu) {
    const menuBody = document.querySelector('.menu_body')
    const menuStart = document.querySelector('.jc_start')
    const menuHeader = document.querySelector('.header__wrap')
    iconMenu.addEventListener('click', function(e) {
        menuHeader.classList.toggle('__active')
        menuStart.classList.toggle('__active')
        iconMenu.classList.toggle('__active')
        menuBody.classList.toggle('__active')
    })
}