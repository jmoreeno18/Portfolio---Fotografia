document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.photo__section');
    const imageBig = document.querySelector('.photo__part1--image');
    const titleBig = document.querySelector('.photo__title--big'); 
    const linkFirst = document.querySelector('.photo__link--principal');
    const originalSrc = imageBig.src;
    const originalTitle = titleBig.textContent;
    const originalLink = linkFirst.href; // Almacenar el enlace original

    sections.forEach(section => {
        const imageSmall = section.querySelector('.photo__part2--image');
        const sectionTitle = imageSmall.alt; // Obtener el alt de la imagen pequeña para usar como título
        const link = section.querySelector('.photo__link');
        const sectionLink = link.href;

        section.addEventListener('mouseenter', function() {
            imageBig.src = imageSmall.src;
            titleBig.textContent = sectionTitle; // Cambiar el título
            linkFirst.href = sectionLink; // Cambiar el enlace del enlace principal
            section.classList.add('hover');
        });

        section.addEventListener('mouseleave', function() {
            // Restaurar el enlace, imagen y título originales
            // imageBig.src = originalSrc;
            // titleBig.textContent = originalTitle;
            // linkFirst.href = originalLink;
            section.classList.remove('hover');
        });
    });
});

    