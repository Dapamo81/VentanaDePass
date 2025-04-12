/**
 * Para abrir la ventana
 */
// const modal = document.getElementById("miModal");
// const btn = document.getElementById("abrirModal");
// const span = document.querySelector(".cerrar");

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// }

/**
 * para comprobar el pass
 */
let intentos = 3

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