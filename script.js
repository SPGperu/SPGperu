.peru-retail-tv-container {
    text-align: center;
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    background-color: #222;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
}



.player-container {
    display: flex;
    padding: 20px;
}

.peru-retail-tv-container h2 {
    color: #fff;
    padding: 15px 20px;
    margin: 0;
    background-color: #333;
    font-size: 1.2em;
}


.video-player {
    position: relative;
    width: 75%; /* Ajusta el ancho según tu preferencia */
    padding-bottom: 40%; /* Mantiene la relación de aspecto 16:9 */
    height: 0; /* Altura inicial en 0 */
    overflow: hidden;
    border-radius: 4px;
    margin-right: 20px; /* Mantiene el margen derecho */
}

.video-player iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Ocupa todo el contenedor */
    border: none;
}

.thumbnails {
    flex: 1;
    overflow-y: auto;
    max-height: 460px;
}

.thumbnail {
    cursor: pointer;
    position: relative;
    padding-bottom: 51.25%; /* Mantiene la relación de aspecto 16:9 */
    height: 0;
        margin-bottom: 15px;
    background-color: #333;
    border-radius: 4px;
    overflow: hidden;
}

.thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen al contenedor */
}

.thumbnail-info {
    overflow: visible;
    background-color: #333;
    padding: 10px;
    border: solid red;
}
.thumbnail-info p {
    margin: 98765432;
    color: #333;
    font-size: 14px;
}






/* Estilos generales */
/* Estilos generales */

/* Estilos para la noticia principal destacada */
#noticia-principal {
    text-align: center;
    margin: 70px 10px 20px;
}

.noticia-imagen img {
    
    width: 100%;
    max-height: 400px;
    object-fit: cover;
}

.noticia-contenido {
    margin: 20px auto;
    max-width: 800px;
}

.noticia-contenido h1 {
    font-size: 28px;
    margin-bottom: 10px;
}

.noticia-contenido .fecha {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
}

.noticia-contenido p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Estilos para secciones de noticias */
main {
    padding: 0 20px;
}

.noticias {
    margin-bottom: 40px;
}

.noticias h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.noticias article {
    margin-bottom: 20px;
}

.noticias h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}
/* Eliminar subrayado de los enlaces */
/* Eliminar subrayado y cambiar color de los enlaces */
a {
    text-decoration: none;
    color: #000000; /* Celeste */
}


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Encabezado */
header {
    background-color: #282c34;
    color: white;
    padding: 1rem 0;
    position: relative;
    animation: slideInDown 1s ease-out;
}
@keyframes slideInDown {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    display: flex;
    align-items: center;
    z-index: 1001;
}
.logo img {
    height: 40px;
    margin-right: 10px;
}
.nav-links {
    display: none;
}
.nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}
.menu-icon {
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
    display: block;
}

/* Menú móvil */
.mobile-menu {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #282c34;
    transition: left 0.3s ease-in-out;
    z-index: 1000;
    overflow-y: auto;
    animation: slideInLeft 0.5s ease-in-out;
}
.mobile-menu.active {
    left: 0;
}
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.mobile-menu-links {
    padding: 60px 20px 20px;
}
.mobile-menu-links a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    display: block;
    margin-bottom: 20px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Overlay */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 999;
}

/* Sección de imágenes destacadas */
.featured-images {
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem ;
}
.featured-image {
    position: relative;
    height: 230px;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease;
}
.featured-image:hover {
    transform: scale(1.05);
}
.featured-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}
.featured-image img:hover {
    transform: scale(1.1);
}
.featured-image-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    transition: background-color 0.3s ease;
}
.featured-image-content:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
.featured-image-content h3 {
    margin: 0 0 0.5rem 0;
}
.featured-image-content p {
    margin: 0;
}

/* Contenido principal */
main {
    padding: 2rem 0;
    animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

h2 {
    color: #282c34;
    margin-bottom: 1rem;
    animation: slideInLeft 1s ease-out;
}

.news-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
.news-item {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}
.news-item:hover {
    transform: translateY(-5px);
}
.news-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}
.news-item img:hover {
    transform: scale(1.05);
}
.news-content {
    padding: 1rem;
}

.analysis, .events {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    margin-top: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    animation: fadeInUp 1s ease-in-out;
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Pie de página */
footer {
    background-color: #333;
    color: white;
    padding: 2rem 0;
    animation: fadeInUp 1s ease-in-out;
}

.footer-content {
    text-align: justify;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
.footer-section h3 {
    margin-bottom: 1rem;
}
.footer-links a {
  
    color: #ccc;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
}
.footer-links a:hover {
    color: white;
    transition: color 0.3s ease;
}
.social-icons a {
    color: white;
    font-size: 1.5rem;
    margin-right: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;
}
.social-icons a:hover {
    color: #282c34;
}
.copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #555;
    animation: fadeIn 1s ease-in;
}

/* Media queries para responsividad */
@media (min-width: 768px) {
    .nav-links {
        display: flex;
    }
    .menu-icon {
        display: none;
    }
    .featured-images {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .featured-image {
        flex: 1 1 calc(33.333% - 1rem);
        max-width: calc(33.333% - 1rem);
    }
    .news-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .footer-content {
        grid-template-columns: repeat(4, 1fr);
    }
    

/* Cambiar color de los enlaces en noticias */
 a {
    text-decoration: none;
    color: #000000; /* Celeste */
}
}
