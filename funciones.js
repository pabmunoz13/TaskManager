   if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }

window.onload=function cargar(){



    var boton1 = "Tarea 1";
    var boton2 = "Tarea 2";

    localStorage.setItem("boton1", boton1);
    localStorage.setItem("boton2", boton2);


    cargarEtiquetas();
}

function cargarEtiquetas(){

    var keys = Object.keys(localStorage);
    for (var a in keys){

         console.log(a, ' = ', localStorage.key(a));
         var nombre =localStorage.getItem(localStorage.key(a));
         console.log("**"+nombre);
         var div = document.getElementById("bot");

         var lastChildID = document.getElementById("bot").lastChild.id;


         if(lastChildID !== undefined){

             var valor = lastChildID.substr(lastChildID.length-1, lastChildID.length);
             var id = parseInt(valor)+1;

         }else{
            var id = 1;
         }
         /*BOTON!*/
         console.log("valor id =======> "+id);
         var node = document.createElement("input");
         node.setAttribute("id",id);
         node.setAttribute("type","button");
         node.setAttribute("value",nombre);
         node.setAttribute("name",nombre);
         node.setAttribute("class","boton");
         node.setAttribute("onClick","editarTarea('"+id+"')");
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
         document.getElementById("div"+id).appendChild(node3);

         /*DIV FUNCIONALIDAD*/
         var node4 = document.createElement("div");
         node4.setAttribute("class","contenedor6");
         node4.setAttribute("id","func"+id);
         document.getElementById("div"+id).appendChild(node4);

         /*BOTON ELIMINAR*/
         var node5 = document.createElement("input");
         node5.setAttribute("type","button");
         node5.setAttribute("value","Eliminar");
         node5.setAttribute("class","boton_tarea");
         node5.setAttribute("onClick","eliminarTarea('"+id+"')");
         document.getElementById("func"+id).appendChild(node5);

         /*BOTON CANCELAR*/
         var node6 = document.createElement("input");
         node6.setAttribute("type","button");
         node6.setAttribute("value","Cancelar");
         node6.setAttribute("class","boton_tarea");
         node6.setAttribute("onClick","cancelarTarea('"+id+"')");
         document.getElementById("func"+id).appendChild(node6);

         /*BOTON GUARDAR*/
         var node7 = document.createElement("input");
         node7.setAttribute("type","button");
         node7.setAttribute("value","Guardar");
         node7.setAttribute("class","boton_tarea");
         node7.setAttribute("onClick","guardarTarea('"+id+"')");
         document.getElementById("func"+id).appendChild(node7);

    }

}
/*PARTE DE ARRIBA*/

function guardar() {
    var nombre = document.getElementById("texto");
    var div = document.getElementById("bot");

    var lastChildID = document.getElementById("bot").lastElementChild.id;
    var valor = lastChildID.substr(lastChildID.length-1, lastChildID.length);
    var id = parseInt(valor)+1;

    /*BOTON!*/
    var node = document.createElement("input");
    node.setAttribute("id",id);
    node.setAttribute("type","button");
    node.setAttribute("value",nombre.value);
    node.setAttribute("name",nombre.value);
    node.setAttribute("class","boton");
    node.setAttribute("onClick","editarTarea('"+id+"')");
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
    document.getElementById("div"+id).appendChild(node3);

    /*DIV FUNCIONALIDAD*/
    var node4 = document.createElement("div");
    node4.setAttribute("class","contenedor6");
    node4.setAttribute("id","func"+id);
    document.getElementById("div"+id).appendChild(node4);

    /*BOTON ELIMINAR*/
    var node5 = document.createElement("input");
    node5.setAttribute("type","button");
    node5.setAttribute("value","Eliminar");
    node5.setAttribute("class","boton_tarea");
    node5.setAttribute("onClick","eliminarTarea('"+id+"')");
    document.getElementById("func"+id).appendChild(node5);

    /*BOTON CANCELAR*/
    var node6 = document.createElement("input");
    node6.setAttribute("type","button");
    node6.setAttribute("value","Cancelar");
    node6.setAttribute("class","boton_tarea");
    node6.setAttribute("onClick","cancelarTarea('"+id+"')");
    document.getElementById("func"+id).appendChild(node6);

    /*BOTON GUARDAR*/
    var node7 = document.createElement("input");
    node7.setAttribute("type","button");
    node7.setAttribute("value","Guardar");
    node7.setAttribute("class","boton_tarea");
    node7.setAttribute("onClick","guardarTarea('"+id+"')");
    document.getElementById("func"+id).appendChild(node7);

    localStorage.setItem("boton"+id, nombre.value);
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
}

function eliminarTarea(id) {
  var divPadre = document.getElementById("bot");
  var input = document.getElementById(id);
  var divHijo = document.getElementById("div"+id);
  divPadre.removeChild(input);
  divPadre.removeChild(divHijo);
  localStorage.removeItem("boton"+id);
}

function cancelarTarea(id) {
  var x = document.getElementById("div"+id);
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

function guardarTarea(id) {
    var idf = "textoTarea"+id;
    document.getElementById(id).value = document.getElementById(idf).value;

    localStorage.setItem("boton"+id, document.getElementById(idf).value);
}
