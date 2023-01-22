function enviar(){
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email")
    var clave = document.getElementById("clave");
    var confirm = document.getElementById("confirm");

    var errorNombre = document.getElementById("error-nombre");
    var errorEmail = document.getElementById("error-email");
    var errorClave = document.getElementById("error-clave");
    var errorConfirm = document.getElementById("error-confirm");

    var iconoNombre = document.getElementById("icon-nombre");
    var iconoEmail = document.getElementById("icon-email");
    var iconoClave = document.getElementById("icon-clave");
    var iconoConfirm = document.getElementById("icon-confirm");

    var iconoOK = "./images/success-icon.svg";
    var iconoERROR = "./images/error-icon.svg";

    var resultado = true;

// Borde rojo por defecto

    nombre.style.border="4px solid red";
    email.style.border="4px solid red";
    clave.style.border="4px solid red";
    confirm.style.border="4px solid red";

// Campos vacios

    if (!nombre.value || !email.value || !clave.value || !confirm.value) {
      const textoVacio = "Rellene este campo";
      errorNombre.textContent= textoVacio;
      errorEmail.textContent= textoVacio;
      errorClave.textContent= textoVacio;
      errorConfirm.textContent= textoVacio;
      resultado = false;
    }

// Validación del input Nombre

    var patternNombre = new RegExp("^[a-zA-Z ]+$");
    if (patternNombre.test(nombre.value)){
            errorNombre.textContent="";
            nombre.style.border="4px solid green";
            iconoNombre.getElementsByTagName("img")[0].src = iconoOK

    } else if (nombre.value){
            errorNombre.textContent="Sólo se admiten carácteres alfabéticos";
            nombre.style.border="4px solid red";
            iconoNombre.getElementsByTagName("img")[0].src = iconoERROR
            resultado = false;
        }
  
// Validación del input Email

    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (validEmail.test(email.value)){
            errorEmail.textContent="";
            email.style.border="4px solid green";
            iconoEmail.getElementsByTagName("img")[0].src = iconoOK

    } else if (email.value) {
            errorEmail.textContent="Email inválido";
            email.style.border="4px solid red";
            iconoEmail.getElementsByTagName("img")[0].src = iconoERROR
            resultado = false;
      }

// Validación del input Clave

    if (clave.value.length >= 8){
            errorClave.textContent="";
            clave.style.border="4px solid green";
            iconoClave.getElementsByTagName("img")[0].src = iconoOK

    } else if (clave.value){
            errorClave.textContent="Debe tener al menos 8 carácteres";
            clave.style.border="4px solid red";
            iconoClave.getElementsByTagName("img")[0].src = iconoERROR
            resultado = false;
          }

// Validación del input Confirmación

    if (confirm.value == clave.value && confirm.value) {
            errorConfirm.textContent="";
            confirm.style.border="4px solid green";
            iconoConfirm.getElementsByTagName("img")[0].src = iconoOK

    } else if (confirm.value){
            errorConfirm.textContent="Las contraseñas no coinciden";
            confirm.style.border="4px solid red";
            iconoConfirm.getElementsByTagName("img")[0].src = iconoERROR
            resultado = false;
      }     
 
// Mensaje validación 

    if (resultado == true) {
        alert("La inscripción ha sido correcta");
    }

// Iconos visibles 

    iconoNombre.style.display = "block";
    iconoEmail.style.display = "block";
    iconoClave.style.display = "block";
    iconoConfirm.style.display = "block";

}