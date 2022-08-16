
function bienvenida(){
let nombre= prompt("ingrese su nombre");
nombre !==""?swal("Hola"+ nombre , "Bienvenido a Gasparinc"):swal("bienvenido sin nombre "); // operador ternario
}
bienvenida();

const libros = [
  {"id":001, "name":"Harry Potter","imagen":"harry potter.jpg", "price":3200, "autor":"J.K Rowling", "stock":0, "genero":"terror"},
  {"id":002, "name":"El señor de los anillos","imagen":"lordOfTheRings.png","price":4500, "autor":"J.R.R Tolkien", "stock":0, "genero":"fantasia"},
  {"id":003, "name":"Juegos del hambre", "price":5000, "imagen":"JDH.webp","autor":"Suzzanne Collins", "stock":0, "genero":"terror"},
  {"id":004, "name":"Animales fantasticos", "price":5000,"imagen":"animales fantasticos.jpeg", "autor":"J.K Rowling", "stock":5, "genero":"terror"},
  {"id":005, "name":"El gato negro", "price":3500,"imagen":"el gato negro.jpg", "autor":"Edgar Allan Poe", "stock":12, "genero":"fantasia"},
  {"id":006, "name":"El hobbit", "price":4500,"imagen":"el hobbit.jpg", "autor":"J.R.R Tolkien", "stock":17, "genero":"fantasia"},
  {"id":007, "name":"La naranja mecanica", "price":3900,"imagen":"la naranja portada.jpg", "autor":"Antony Burgess", "stock":20, "genero":"terror"},
  {"id":8, "name":"Prohibido suicidarse en primavera", "price":6000,"imagen":"prohibido suicidarse en primavera.jpg", "autor":"Alejandro Casona", "stock":15, "genero":"terror"}
] ;

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
    carrito.splice(index, 1) &&  actualizarCarro();  // operador logico AND
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

generarCards(libros);




function filtrarLibros(genero){
  document.getElementById("seccion-card").innerHTML = "";
  let librosFiltrados = libros.filter(
    function (libro) {
    return libro.genero===genero;
  });
  console.log(librosFiltrados);
  generarCards(librosFiltrados);
}


//filtrarLibros("terror");


