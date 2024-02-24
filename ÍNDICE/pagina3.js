// Obtener todas las imágenes de la galería
var imagenes = document.querySelectorAll("img");

// Agregar un event listener a cada imagen para mostrarlas en grande al hacer clic
imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", function() {
        mostrarImagenGrande(imagen.src);
    });
});

// Función para mostrar la imagen en grande
function mostrarImagenGrande(src) {
    // Crear un elemento de imagen para la imagen en grande
    var imagenGrande = document.createElement("img");
    imagenGrande.src = src;
    imagenGrande.classList.add(".imagen-grande"); 

    // Crear un elemento de div para el modal
    var modal = document.createElement("div");
    modal.classList.add("modal");

    // Agregar la imagen en grande al modal
    modal.appendChild(imagenGrande);

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Agregar un event listener para cerrar el modal al hacer clic fuera de la imagen
    modal.addEventListener("click", function() {
        cerrarModal(modal);
    });
}

// Función para cerrar el modal
function cerrarModal(modal) {
    modal.remove();
}
