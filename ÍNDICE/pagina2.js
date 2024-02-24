// Función para procesar el formulario de tipo de evento y mostrar un mensaje de confirmación
function procesarEvento() {
    var seleccion = document.getElementById("Evento").value;
    var mensaje = "Has seleccionado el tipo de evento: " + seleccion + ". ¿Estás seguro de enviar esta opción?";
    if (confirm(mensaje)) {
        alert("¡Has confirmado el tipo de evento: " + seleccion + "!");
    }
}

// Función para procesar el formulario de lugar y mostrar un mensaje de confirmación
function procesarLugar() {
    var seleccion = document.getElementById("Lugar").value;
    var mensaje = "Has seleccionado el lugar: " + seleccion + ". ¿Estás seguro de enviar esta opción?";
    if (confirm(mensaje)) {
        alert("¡Has confirmado el lugar: " + seleccion + "!");
    }
}

// Agrega un event listener al formulario de tipo de evento para ejecutar la función procesarEvento cuando se envíe
document.getElementById("formularioEvento").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    procesarEvento();
});

// Agrega un event listener al formulario de lugar para ejecutar la función procesarLugar cuando se envíe
document.getElementById("formularioLugar").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    procesarLugar();
});