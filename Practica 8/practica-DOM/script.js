var parrafo = document.getElementById("miParrafo")

// modificando
parrafo.textContent = "Este es el nuevo texto del parrafo"
parrafo.style.backgroundColor = "red";
var nuevaLista = document.createElement("ul")


// agregando elementos
for(var i = 0; i < 3; i++){
    var listItem = document.createElement("li");
    listItem.textContent = "Elemento " + (i+1);
    nuevaLista.appendChild(listItem)
}
document.body.appendChild(nuevaLista)

// eliminar elementos
var lista = document.getElementById("miLista")
var listItem = document.getElementById("miListItem")
lista.removeChild(listItem);

var miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click" , function(){
    alert("haz hecho click en el boton")
})

// remover evento

miBoton.removeEventListener("click" , function(){
    alert("haz hecho click en el boton")
})