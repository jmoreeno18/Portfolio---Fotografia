const images = [
    { url: '/assets/img/3-sesion-fotografia/09.JPG', color: 'black' },
    { url: '/assets/img/1-sesion-fotografia/01.JPG', color: 'white' },
    { url: '/assets/img/portada/foto-6.webp', color: 'white' }
];

let currentIndex = 0;
const maxWidth = 899;
let imagesLoaded = 0;
let intervalId = null;

function preloadImages(callback) {
    images.forEach(image => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                callback(); // Todas las imágenes están cargadas
            }
        };
    });
}

function changeBackgroundImageAndTitleColor() {
    const container = document.querySelector('.layout__front-page');
    const title = document.querySelector('.title__name');
    const text = document.getElementById('title__text');

    if (window.innerWidth < maxWidth) {
        // Cambia la imagen de fondo y el color del título
        container.style.backgroundImage = `url(${images[currentIndex].url})`;
        title.style.color = images[currentIndex].color;
        text.style.color = images[currentIndex].color;

        // Avanza al siguiente índice y vuelve al principio si llega al final
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        // Restaurar el fondo y color cuando el ancho es mayor a maxWidth
        container.style.backgroundImage = ''; // Quita la imagen de fondo
        title.style.color = ''; // Restaura el color original
        text.style.color = ''; // Restaura el color original
    }
}

// Pre-carga todas las imágenes antes de iniciar el cambio de fondo
preloadImages(() => {
    // Cambia la imagen y el color del título cada 3 segundos después de cargar todas las imágenes
    intervalId = setInterval(changeBackgroundImageAndTitleColor, 3000);

    // Establece la primera imagen y color del título al cargar la página
    changeBackgroundImageAndTitleColor();
});

// Detectar el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    // Si la pantalla vuelve a ser mayor que maxWidth, detener el ciclo
    if (window.innerWidth >= maxWidth && intervalId) {
        clearInterval(intervalId); // Detener el cambio de imágenes
        intervalId = null;
        changeBackgroundImageAndTitleColor(); // Restaurar estado original
    } else if (window.innerWidth < maxWidth && !intervalId) {
        // Si la pantalla vuelve a ser menor que maxWidth, reiniciar el ciclo
        intervalId = setInterval(changeBackgroundImageAndTitleColor, 3000);
        changeBackgroundImageAndTitleColor();
    }
});
