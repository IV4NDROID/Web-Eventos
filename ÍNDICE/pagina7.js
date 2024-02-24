document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.querySelector("form"); // Obtener el formulario

    formulario.addEventListener("submit", function(event) { // Agregar un event listener al evento submit del formulario
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        var opciones = document.getElementById("opciones"); // Obtener el elemento select
        var seleccion = opciones.value; // Obtener el valor de la opción seleccionada

        // Objeto para mapear las opciones a sus nombres correspondientes
        var nombres = {
            "opcion1": "Básico",
            "opcion2": "Infantil",
            "opcion3": "Boda",
            "opcion4": "Eventos"
        };

        var nombreSeleccionado = nombres[seleccion]; // Obtener el nombre correspondiente a la opción seleccionada

        var mensaje = "Has seleccionado el paquete: " + nombreSeleccionado + ". ¡Gracias por tu elección!"; // Crear el mensaje de confirmación
        alert(mensaje); // Mostrar el mensaje después de enviar el formulario
    });
});