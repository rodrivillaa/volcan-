function applyScrollAnimations() {
    var elements = document.querySelectorAll('.animate__animated'); // Selecciona todos los elementos con la clase animate__animated
    
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var elementTop = element.getBoundingClientRect().top;  // Obtiene la posición del elemento en relación con la ventana
        
        // Verifica si el elemento está en el viewport (visibilidad dentro de la pantalla)
        if (elementTop < window.innerHeight && elementTop > 0) {
            // Si no se ha aplicado la animación
            if (!element.classList.contains('animated-once')) {
                // Agrega animación dependiendo de la posición del elemento
                if (elementTop < window.innerHeight / 2) {
                    element.classList.add('animate__backInRight'); // Animación desde la derecha
                } else {
                    element.classList.add('animate__backInLeft'); // Animación desde la izquierda
                }
                // Marca el elemento como animado para no volver a animarlo
                element.classList.add('animated-once');
            }
        }
    }
}

// Función para reiniciar las animaciones al cargar la página
function resetAnimations() {
    var elements = document.querySelectorAll('.animate__animated');
    elements.forEach(function(element) {
        element.classList.remove('animated-once'); // Elimina la clase de animación aplicada
        element.classList.remove('animate__backInRight', 'animate__backInLeft'); // Elimina las clases de animación
    });
}

// Reinicia las animaciones al cargar la página
window.addEventListener('load', function() {
    resetAnimations(); // Restablece las animaciones
    applyScrollAnimations(); // Aplica las animaciones inmediatamente al cargar
});

// Aplica las animaciones al hacer scroll
window.addEventListener('scroll', applyScrollAnimations);

// Aplica las animaciones cuando se carga la página por primera vez
applyScrollAnimations();


// Mostrar el ícono de la flecha hacia arriba cuando se hace scroll hacia abajo
window.onscroll = function() {
    var scrollToTop = document.getElementById("scroll-to-top");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTop.classList.add("show"); // Aparece la flecha
    } else {
        scrollToTop.classList.remove("show"); // Desaparece la flecha
    }
};

// Función para hacer scroll hacia arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}