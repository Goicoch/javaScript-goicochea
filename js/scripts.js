
function bienvenida(){
let nombre= prompt("ingrese su nombre");
nombre !==""?swal("Hola "+ nombre , "Bienvenido a Gasparinc"):swal("Bienvenido sin nombre "); 
}
bienvenida();

let libros =[];

const carrito =JSON.parse(localStorage.getItem('carrote')) ?? []; 
estadoCarrito();

buscarUnProductoEnJson = async () => {
  let response = await fetch('libros.json');
  libros = await response.json();
  generarCards(libros);
  
};
 
buscarUnProductoEnJson();



function sumarAlCarro(idLibro) {
  const index= libros.findIndex(
    function (libro){
     return libro.id===idLibro;
}
  );
  if (index!== -1){
    let libroAagregar=libros[index];
    carrito.push(libroAagregar) && actualizarCarro();
    deshabilitarBtn();
    estadoCarrito();
   
    
    
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
    deshabilitarBtn();
   
    
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
    validarInput()
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

function generarCards(librosAlistar) {
  document.getElementById("seccion-card").innerHTML="";
librosAlistar.forEach((libro) => {
  let idBtnQuitar =`btnQuitar-${libro.id}`;
   document.getElementById("seccion-card").innerHTML += `  <div  class="col mb-4 "><div class="card ">
                            
  <img class="card-img-top" src="./imagenes/${libro.imagen}" alt="..." />
  
  <div class="card-body p-0">
      <div class="text-center">
     
          <h5 class="fw-bolder"> ${libro.name}</h5>
          
          $${libro.price}
      </div
  </div>
  
  <div class="card-footer p-4 pt-3 border-top-1 bg-transparent">
      <div class="text-center"><a onclick="sumarAlCarro(${libro.id})" class=" botonIMG btn btn-outline-dark">Agregar al Carrito</a></div>
     <br>
      <div class="text-center"><button id="${idBtnQuitar}" onclick="advertencia(${libro.id})"  class=" botonIMG btn btn-outline-dark ">Quitar del Carrito</button></div>
  </div>
  
</div>       
</div>`;
deshabilitarBtn();

})
}
function deshabilitarBtn(){
  for(let libro of libros){
    let idBtnQuitar =`btnQuitar-${libro.id}`;
    if(!libroEstaEnCarrito(libro.id)){
      let btn = document.getElementById(idBtnQuitar);
      if(!!btn){
        btn.style.display = "none";
      }
    }
    else{
      let btn = document.getElementById(idBtnQuitar);
      if(!!btn){
        btn.style.display = "";
      }
    }
  }
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
  
}

function vaciarCarrito() {
  document.getElementById ("mostrarCarro").innerHTML =""
carroVacio = carrito.length = 0
  document.getElementById ("mostrarCarro").innerHTML = carroVacio
actualizarCarro();


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


/*function validarInput(){
let input = document.getElementById("totalCart");
let button = document.getElementById("carro");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.getElementById("totalCart").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}}*/

function libroEstaEnCarrito (idLibro) {
  const index = carrito.findIndex(
    function (libro) {
      return libro.id === idLibro;
  });
  return index > -1;


}