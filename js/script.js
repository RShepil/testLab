// Бургер-меню
const iconMenu = document.querySelector('.menu-icon')
if (iconMenu) {
    const menuBody = document.querySelector('.menu-body')
    const menuStart = document.querySelector('.jc-start')
    iconMenu.addEventListener('click', function(e) {
        menuStart.classList.toggle('_active')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}