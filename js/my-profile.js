var elementoEmail = document.getElementById("email");
var emailTexto = elementoEmail.textContent || elementoEmail.innerText;
var email_profile = document.getElementById("email-profile");
var nombre_profile = document.getElementById("nombre-profile");

function getCookie(nombre) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(nombre + '=') === 0) {
            return decodeURIComponent(cookie.substring(nombre.length + 1));
        }
    }
    return null;
}

// Obtén el valor de la cookie llamada "miCookie"
var mail = getCookie('email');

// Reemplaza el texto en el elemento HTML con el ID "miParrafo" si la cookie existe
if (mail !== null) {
    var email_profile = document.getElementById("email-profile");
    email_profile.textContent = mail;
}

// Obtén el valor de la cookie llamada "miCookie"
var nombre = getCookie('email');

// Reemplaza el texto en el elemento HTML con el ID "miParrafo" si la cookie existe
if (valorDeLaCookie !== null) {
    var email_profile = document.getElementById("email-profile");
    email_profile.textContent = valorDeLaCookie;
}

// BOTON EDITAR PERFIL

var editarPerfilBtn = document.getElementById("editarPerfil")







