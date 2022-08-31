
function bienvenida(){
let nombre= prompt("ingrese su nombre");
nombre !==""?swal("Hola "+ nombre , "Bienvenido a Gasparinc"):swal("Bienvenido sin nombre "); 
}
bienvenida();


 let libros =[];
 
 buscarUnProductoEnJson = async () => {
  let response = await fetch('libros.json');
  libros = await response.json();
  generarCards(libros);
  
  };
 
 buscarUnProductoEnJson();
 




const carrito =JSON.parse(localStorage.getItem('carrote')) ?? []; 
estadoCarrito();



 function sumarAlCarro(idLibro) {
  const index= libros.findIndex(
    function (libro){
    return libro.id===idLibro;
}
  );
  if (index!== -1){
    let libroAagregar=libros[index];
    carrito.push(libroAagregar) && actualizarCarro();
    
    Toastify({

      text: "Agregaste "+ libroAagregar.name,
      
      duration: 3000
      
      }).showToast();
  }
}


function quitarDelCarro(idLibro) {
  const index = carrito.findIndex(
    function (libro) {
    return libro.id===idLibro;
  }
  );
  
  if (index !== -1) {
    let libroAquitar=libros[index];
    carrito.splice(index, 1) && actualizarCarro();  

   /* Toastify({


      text: "Quitaste "+ libroAquitar.name,
      
      duration: 3000
      
      }).showToast();*/
  }  
}

function estadoCarrito () {
  let total= carrito.length;
  document.getElementById ("totalCart").innerHTML = total
  console.log(total);

}
function actualizarCarro() {
  estadoCarrito();
  console.log(carrito);
  localStorage.setItem("carrote", JSON.stringify(carrito)); 
}

function advertencia(idLibro){ 
  swal({
  title: "Estas seguro/a?",
  text: "Una vez borrado el producto debera ingresarlo nuevamente",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    quitarDelCarro(idLibro);
    swal("Poof! Quitaste el producto!!!", {
      icon: "success",
    });
  } else {
    swal("Tu producto sigue en el carro");
  }
});
}


function generarCards(librosAlistar) {
  document.getElementById("seccion-card").innerHTML="";
librosAlistar.forEach((libro) => {
   document.getElementById("seccion-card").innerHTML += `  <div  class="col mb-4 "><div class="card ">
                            
  <img class="card-img-top" src="./imagenes/${libro.imagen}" alt="..." />
  
  <div class="card-body p-4">
      <div class="text-center">
     
          <h5 class="fw-bolder"> ${libro.name}</h5>
          
          $${libro.price}
      </div
  </div>
  
  <div class="card-footer p-4 pt-0 border-top-1 bg-transparent">
      <div class="text-center"><a onclick="sumarAlCarro(${libro.id})" class="btn btn-outline-dark">Agregar al Carrito</a></div>
     <br>
      <div class="text-center"><a  onclick="advertencia(${libro.id})" class="btn btn-outline-dark ">Quitar del Carrito</a></div>
     
  </div>
  
</div>       
</div>`
})
}


function filtrarPorGenero(genero){
  document.getElementById("seccion-card").innerHTML = "";
  let librosFiltrados = libros.filter(
    function (libro) {
    return libro.genero===genero;
  });
  console.log(librosFiltrados);
  generarCards(librosFiltrados);
}

function mostrarCarrito(){
  document.getElementById("mostrarCarro").innerHTML="";
 carrito.forEach((libro) =>{
  
    document.getElementById("mostrarCarro").innerHTML+=`
    <tr class="table-dark">
    <td class="table-dark">${libro.name}</td>
    <td class="table-dark"> $${libro.price}</td>
    <td class="table-dark"><img class="card-img-top" src="./imagenes/${libro.imagen}" style="width:150px;height:200px" alt="..." /></td>
    
    <td class="table-dark"><a  onclick="quitarDelCarro(${libro.id})" class="btn btn-outline-dark ">Quitar del Carrito</a></td>
    </tr>
    `
    });
    
    
  }


 function vaciarCarrito() {
  
 let carroVacio = carrito.length = 0
 document.getElementById ("totalCart").innerHTML = carroVacio
 actualizarCarro();
 }