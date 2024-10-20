// obtener elemento por id
let parrafo = document.getElementById("miParrafo")
console.log(parrafo.textContent)

// cambiar el contenido del parrafo cuando se hace click

let boton = document.getElementById("miBoton")
boton.addEventListener("click" , function(){
    parrafo.textContent = "texto actualizado";
    console.log(parrafo.textContent); //imprime: texto actualizado
} )