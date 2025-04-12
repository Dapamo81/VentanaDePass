let intentos = 3
/**
 * Para abrir la ventana
 */
const modal = document.getElementById("miModal");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.getElementById("cerrarModal");
const botonConfirmar = document.getElementById("Confirmar");
const interaccion = document.getElementById("interaccion");

abrirModal.onclick = function () {
    modal.style.display = "block";
    intentosRestantes = 3;
    interaccion.innerHTML = "";
    interaccion.style.color = "red";
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
    botonConfirmar.disabled = false;
  };

  cerrarModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

/**
 * para comprobar el pass
 */


function comprabarPass(){
    let pass = document.getElementById("pass").value;
    let user = document.getElementById("user").value;
    let interaccion = document.getElementById("interaccion");

    const contrasena = "1234";
    const usuario = "Dani";
    
    if(intentos <=0){
        interaccion.innerHTML ="Ya no hay mas intnetos"
        return;
    }
    

    if(usuario!==user){
        interaccion.innerHTML = "Usuario incorrect";
        intentos--;
    }else if (contrasena !== pass){
        
        interaccion.innerHTML ="Contraseña incorrecta";
        intentos--;
    }else{
        interaccion.innerHTML ="Paso garantizado";
    }

    if (intentos === 0) {
        interaccion.innerHTML += "<br>Has agotado tus intentos.";
      } else {
        interaccion.innerHTML += `<br>Intentos restantes: ${intentos}`;
      }

}