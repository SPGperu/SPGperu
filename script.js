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

    // Función para manejar el cambio de tamaño de la ventana
    function handleResize() {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.remove('active');
            overlay.style.display = 'none';
            body.style.overflow = '';
        }
    }

    // Escuchar el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a la función una vez al cargar para establecer el estado inicial
    handleResize();
});