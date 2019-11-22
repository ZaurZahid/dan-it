var burger = document.querySelector('.header-burger');
var nav = document.querySelector('.header-nav');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})