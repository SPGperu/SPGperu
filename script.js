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
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario ya ha aceptado o rechazado las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-consent').style.display = 'block';
    }

    // Manejar el botón "Aceptar"
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookie-consent').style.display = 'none';
    });

    // Manejar el botón "Rechazar"
    document.getElementById('decline-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        document.getElementById('cookie-consent').style.display = 'none';
    });
});

