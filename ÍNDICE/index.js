// index.js

// Función para mostrar un saludo amigable en un mensaje emergente
function saludar() {
   confirm("¡Bienvenido a Eventos Amalucan! ¿En qué puedo ayudarte?");
}

// Llamada a la función
saludar();


// Función para validar el formulario de contacto y mostrar mensajes emergentes
function validarFormulario() {
    var nombre = prompt("Nombre").value;
    var email = prompt("Email").value;

    if (nombre === "" || email === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    alert("¡Gracias por contactarnos, " + nombre + "! Nos pondremos en contacto contigo pronto.");
    return true;
}
validarFormulario();



