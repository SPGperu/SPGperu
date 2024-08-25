// script.js



document.querySelector('.menu').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});