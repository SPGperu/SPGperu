// script.js

document.getElementById('menu-toggle').addEventListener('click', function() {
  var menuList = document.querySelector('.menu-list');
  menuList.classList.toggle('active');
});

document.querySelector('.menu').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});