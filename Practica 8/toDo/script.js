var nuevaTareaInput = document.getElementById("nuevaTarea");
var agregaBtn = document.getElementById("agregarBtn");
var listaTareas = document.getElementById("listaTareas");

// agregando evento para detectar los clicks
agregaBtn.addEventListener("click", function(){
    // se obtiene el valor ingresado en el input 
    var textoTarea = nuevaTareaInput.value;

    //verificando el campo no este vacio
    if(textoTarea !== ""){
        var nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("tarea");

        var spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;
        nuevaTarea.appendChild(spanTexto);

        //creando div para los botones
        var divBotones = document.createElement("div");

        // creamos un boton para eliminar la tarea
        var eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("eliminarBtn");
        eliminarBtn.textContent = "Eliminar";

        eliminarBtn.addEventListener("click" , function(){
            listaTareas.removeChild(nuevaTarea);
        });

        // crear el boton para modificar la tarea
        var modificarBtn = document.createElement("button");
        modificarBtn.classList.add("modificarBtn");
        modificarBtn.textContent = "Modificar";

        modificarBtn.addEventListener("click" , function(){
            // verificar si la tarea esta en modo edicion
            if(modificarBtn.textContent === "Modificar"){
                modificarBtn.textContent = "Guardar";

                //convertir el contenido de la tarea en texto editable
                var inputModificacion = document.createElement("input");
                inputModificacion.type = "text";
                inputModificacion.value = spanTexto.textContent;
                nuevaTarea.replaceChild(inputModificacion, spanTexto);
            }else{
                modificarBtn.textContent = "Modificar";

                var nuevoTexto = nuevaTarea.firstChild.value;

                spanTexto.textContent = nuevoTexto;

                nuevaTarea.replaceChild(spanTexto, nuevaTarea.firstChild);
            }
        });

        // añadimos los botones al div de botones 
        divBotones.appendChild(modificarBtn);
        divBotones.appendChild(eliminarBtn);

        // Añadimos el div de botones a la tarea 
        nuevaTarea.appendChild(divBotones);

        // añadimos la nueva tarea a la lista de tareas
        listaTareas.appendChild(nuevaTarea);

        // limpiamos el campo de entrada despues de agregar la tarea
        nuevaTareaInput.value = "";
    } else {
        alert("Por favor ingresa una tarea");
    }
});
