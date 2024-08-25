// script.js

document.cookie = "usuario=Juan; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
function obtenerCookie(nombre) {
    let nombreCookie = nombre + "=";
    let decodificado = decodeURIComponent(document.cookie);
    let partes = decodificado.split(';');
    for (let i = 0; i < partes.length; i++) {
      let parte = partes[i];
      while (parte.charAt(0) === ' ') {
        parte = parte.substring(1);
      }
      if (parte.indexOf(nombreCookie) === 0) {
        return parte.substring(nombreCookie.length, parte.length);
      }
    }
    return null;
  }
  let usuario = obtenerCookie('usuario');
if (usuario) {
  console.log('Hola, ' + usuario);
} else {
  console.log('No se encontró la cookie.');
}
document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
document.querySelector('.menu').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});