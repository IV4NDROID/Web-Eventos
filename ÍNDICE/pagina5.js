document.addEventListener("DOMContentLoaded", function() {
    var opciones = document.getElementById("opciones");
    var descripciones = document.querySelectorAll("div.descripcion");

    opciones.addEventListener("change", function() {
        var seleccion = opciones.value;
        descripciones.forEach(function(descripcion) {
            descripcion.style.display = "none"; // Oculta todas las descripciones
        });

        var descripcionSeleccionada = document.getElementById(seleccion);
        descripcionSeleccionada.style.display = "block"; //
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.querySelector("form"); // Obtener el formulario

    formulario.addEventListener("submit", function(event) { // Agregar un event listener al evento submit del formulario
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        var opciones = document.getElementById("opciones"); // Obtener el elemento select
        var seleccion = opciones.value; // Obtener el valor de la opción seleccionada

        var mensaje = "Has seleccionado la opción: " + seleccion + ". ¿Estás seguro de enviar esta opción?"; // Crear el mensaje de confirmación
        var confirmacion = confirm(mensaje); // Mostrar el mensaje de confirmación y guardar la respuesta del usuario

        if (confirmacion) { // Si el usuario confirma la selección
            formulario.submit(); // Enviar el formulario
        }
    });
});