
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
    
    estadoCarrito();
   
    actualizarCarroPrecio()
    
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
   
    actualizarCarroPrecio()
    
   /* Toastify({


      text: "Quitaste "+ libroAquitar.name,
      
      duration: 3000
      
      }).showToast();*/
  }  
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
    mostrarCarrito();
    swal("Poof! Quitaste el producto!!!", {
      icon: "success",
    });
  } else {
    swal("Tu producto sigue en el carro");
  }
});
}

function advertenciaCarrito(){ 
  swal({
  title: "Estas seguro/a de vaciar el CARRITO?",
  text: "Una vez vaciado el carro debera ingresarlo los productos nuevamente",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    vaciarCarrito();
    swal("Poof! Quitaste el producto!!!", {
      icon: "success",
      
    });
  } else {
    swal("Tu producto sigue en el carro");
  }
});
}


function estadoCarrito () {
  let total= carrito.length;
  document.getElementById ("totalCart").innerHTML = total
  console.log(total);
 mostrarCarrito();
}

function actualizarCarro() {
  estadoCarrito();
 console.log(carrito);
  localStorage.setItem("carrote", JSON.stringify(carrito)); 
  
}

function actualizarCarroPrecio() {
  
  console.log(totalSumado);
  localStorage.setItem("carroteSumado", JSON.stringify(sumarLibrosCarrito));
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
    <td class="tituloCanvas table-dark">${libro.name}</td>
    
    <td class=" table-dark"> Total $${libro.price}</td>
    <td class="table-dark"><img class="card-img-top" src="./imagenes/${libro.imagen}" style="width:150px;height:200px" alt="..." /></td>
    
    <td class="table-dark"><a  onclick="advertencia(${libro.id})" class="btn btn-outline-dark ">Quitar del Carrito</a></td>
    </tr>
    `
    });
    
    let totalSumado= carrito.map(libro => libro.price).reduce((prev, curr) => prev + curr, 0);
    document.getElementById ("precioTotalCarro").innerHTML = totalSumado
    console.log(totalSumado);
    //actualizarCarro();
   // actualizarCarroPrecio();
}

function vaciarCarrito() {
  document.getElementById ("mostrarCarro").innerHTML =""
carroVacio = carrito.length = 0
  document.getElementById ("mostrarCarro").innerHTML = carroVacio
actualizarCarro();
actualizarCarroPrecio();
estadoCarritoSumado();
}

function filtrarPorPrecio(price){
  document.getElementById("seccion-card").innerHTML = "";
  let librosFiltrados = libros.filter(
    function (libro) {
    return libro.price<=price;
  });
  console.log(librosFiltrados);
  generarCards(librosFiltrados);
}