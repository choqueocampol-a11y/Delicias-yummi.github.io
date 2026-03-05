function modoOscuro(){
    document.body.classList.toggle("dark");
}

document.getElementById("formulario").addEventListener("submit", function(e){

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let mensaje = document.getElementById("mensaje").value;

if(nombre=="" || correo=="" || mensaje==""){
alert("Por favor complete todos los campos🩷");
e.preventDefault();
}
 else{
    alert("😊 Gracias por comunicarte con nosotros");
    document.getElementById("formulario").reset();
}

});