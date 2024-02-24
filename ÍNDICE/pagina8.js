// Función para procesar el formulario al enviarlo
function procesarFormulario() {
    // Solicitar al usuario que ingrese su nombre, email y teléfono mediante un mensaje de confirmación
    var nombre = prompt("Por favor, ingresa tu nombre:");
    var email = prompt("Por favor, ingresa tu dirección de correo electrónico:");
    var telefono = prompt("Por favor, ingresa tu número de teléfono:");

    // Confirmar los datos ingresados por el usuario
    var confirmacion = confirm("Por favor, confirma la siguiente información:\n\nNombre: " + nombre + "\nEmail: " + email + "\nTeléfono: " + telefono);

    // Si el usuario confirma, mostrar un mensaje de agradecimiento
    if (confirmacion) {
        alert("Gracias por considerarnos en sus eventos importantes. Nos contactaremos en breve con usted.");
    }
}
procesarFormulario();

// Obtener el formulario por su ID
var formulario = document.getElementById("contactForm");

// Agregar un event listener para el evento "submit" del formulario
formulario.addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe
    event.preventDefault();

    // Procesar el formulario
    procesarFormulario();
});