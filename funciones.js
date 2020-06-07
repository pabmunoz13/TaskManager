/*
function guardar(){
    let boton = {
        posicion: 4,
        nombre: "tarea4"
    }
    let prueba = "Juan";
    localStorage.setItem("boton", JSON.stringify(boton));
}*/

function cargar(){
    let boton = JSON.parse( localStorage.getItem("boton"));
    console.log (boton)
}

/*PARTE DE ARRIBA*/

function guardar() {
    var nombre = document.getElementById("texto");
    var div = document.getElementById("bot");

    var lastChildID = document.getElementById("bot").lastElementChild.id;
    var valor = lastChildID.substr(lastChildID.length-1, lastChildID.length);
    var id = parseInt(valor)+1;
    console.log("PRUEBA ULTIMO ID => "+valor);

    /*BOTON!*/
    var node = document.createElement("input");
    node.setAttribute("id",id);
    node.setAttribute("type","button");
    node.setAttribute("value",nombre.value);
    node.setAttribute("name",nombre.value);
    node.setAttribute("class","boton");
    node.setAttribute("onClick","editarTarea()");
    div.appendChild(node);

    /*DIV CONTENEDOR DE BOTONES*/
    var node2 = document.createElement("div");
    node2.setAttribute("id","div"+id);
    node2.setAttribute("class","contenedor5");
    div.appendChild(node2);

    /*INPUT TEXT*/
    var node3 = document.createElement("input");
    node3.setAttribute("type","text");
    node3.setAttribute("id","textoTarea"+id);
    nodo2.appendChild(node3);

    /*DIV FUNCIONALIDAD*/
    var node4 = document.createElement("div");
    node4.setAttribute("class","contenedor6");

    /*BOTON ELIMINAR*/
    var node5 = document.createElement("input");
    node5.setAttribute("type","button");
    node5.setAttribute("value","Eliminar");
    node5.setAttribute("class","boton_tarea");
    node5.setAttribute("onClick","eliminarTarea('"+id+"')");
    node4.appendChild(node5);

    /*BOTON CANCELAR*/
    var node6 = document.createElement("input");
    node6.setAttribute("type","button");
    node6.setAttribute("value","Cancelar");
    node6.setAttribute("class","boton_tarea");
    node6.setAttribute("onClick","cancelarTarea('"+id+"')");
    node4.appendChild(node6);

    /*BOTON GUARDAR*/
    var node7 = document.createElement("input");
    node7.setAttribute("type","button");
    node7.setAttribute("value","Guardar");
    node7.setAttribute("class","boton_tarea");
    node7.setAttribute("onClick","guardarTarea('"+id+"')");
    node4.appendChild(node7);

    nodo2.appendChild(node4);

    div.appendChild(node2);
/*    <input type="button" onclick="editarTarea()" class="boton" id="4" type="button" value="Tarea4"></input>
                <div id="div4" class="contenedor5">
                    <input type="text" id="textoTarea4"></input>
                    <div class="contenedor6">
                        <input type="button" class="boton_tarea"  onclick="eliminarTarea('4')" value="Eliminar"></input>
                        <input type="button" class="boton_tarea"  onclick="cacelarTarea('4')" value="Cancelar"></input>
                        <input type="button" class="boton_tarea"  id="pepe" onclick="guardarTarea('4')" value="Guardar"></input>
                    </div>
                </div>*/

}

function addTarea() {
  var x = document.getElementById("divAdd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

function cacelar() {
  var x = document.getElementById("divAdd");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

/*PARTE DE ABAJO*/


function editarTarea(id){

 var x = document.getElementById("div"+id);
 console.log("Que estamos pasando? "+ x);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
    let boton = document.getElementById(id).value;
    //localStorage.setItem("botonrr", boton);
}

function eliminarTarea(id) {
  var divPadre = document.getElementById("bot");
  var input = document.getElementById(id);
  var divHijo = document.getElementById("div"+id);
  divPadre.removeChild(input);
  divPadre.removeChild(divHijo);
}

function cacelarTarea(id) {
  var x = document.getElementById("div"+id);
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

function guardarTarea(id) {
    var idf = "textoTarea"+id;
    document.getElementById(id).value = document.getElementById(idf).value;
}
