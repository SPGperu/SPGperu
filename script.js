document.querySelector('.image-gallery').addEventListener('touchstart', function (e) {
    this.classList.add('scrolling');
}, { passive: true });

document.querySelector('.image-gallery').addEventListener('touchend', function (e) {
    this.classList.remove('scrolling');
}, { passive: true });
// En tu archivo script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});


