
    // Selecciona todos los enlaces con video
    document.querySelectorAll('.video-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la acción predeterminada de los controles del video
            window.location.href = this.href; // Navega al enlace
        });
    });
