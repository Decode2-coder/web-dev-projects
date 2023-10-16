const menu = document.querySelector('#mobile-menu')
const menuLinkS = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinkS.classList.toggle('active');
})