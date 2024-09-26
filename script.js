document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    }

    menuIcon.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Cerrar el menú al hacer clic en un enlace
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });



    const mainPlayer = document.getElementById('main-player');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoSrc = thumbnail.dataset.src;
            mainPlayer.src = videoSrc;
            mainPlayer.play();
        });
    });
}) ;