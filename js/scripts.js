/* MULTIPLICADOR
alert ("El 1er numero se multiplicara por el 2do" );
let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i = parseInt(prompt("Ingresar Numero")); i >= 0; ) {
    let resultado = ingresarNumero * i ;
console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

function numerosImpares(){
alert("Se mostraran los numeros impares hasta 99")
for (let i = 0; i < 100; i++) {

    if (i % 2) {
      alert( i );
    }
  
  }
}
numerosImpares()


 
function promedioDeEdad(){
  let sumaEdades = 0;
  for (let i = 1; i <6 ; i++){
    let edad=parseInt(prompt("ingrese edad"+" "+ i));
    sumaEdades = sumaEdades + edad;
  
  } 
  alert("promedio edad" +" " + sumaEdades/5)
  }

  promedioDeEdad();



  const genero = [ "aventura", "cienciaFiccion", "terror", "gotico"," policial"];
  const autores = ["miguelCervantes", "marquesDeSade", "GOETHE", "janeAusten", "victorHugo"];

 

console.log(autores.length); 

autores.push('edgarAllanPoe');
console.log(autores.length); 
console.log(genero); 



*/



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
    carrito.push(libros[index]);
    actualizarCarro();
  }
}


function quitarDelCarro(idLibro) {
  const index = carrito.findIndex(
    function (libro) {
    return libro.id===idLibro;
  });
  if (index !== -1) {
    carrito.splice(index, 1);
    actualizarCarro();
  }   
}
function estadoCarrito (){
  let total= carrito.length;
  document.getElementById ("totalCart").innerHTML = total;
  console.log(total);

}
function actualizarCarro(){
  estadoCarrito();
  console.log(carrito);
  localStorage.setItem("carrote", JSON.stringify(carrito)); 
}

function filtrarLibros(genero){
  let librosFiltrados = libros.filter(
    function (libro) {
    return libro.genero===genero;
  });
  console.log(librosFiltrados);
}

libros.forEach((libro) => {
   document.getElementById("seccion-card").innerHTML += ` <div  class="col mb-5 "><div class="card ">
                            
  <img class="card-img-top" src="./imagenes/${libro.imagen}" alt="..." />
  
  <div class="card-body p-4">
      <div class="text-center">
          
          <h5 class="fw-bolder"> Nombre:<br> ${libro.name}</h5>
          
          $${libro.price}
      </div
  </div>
  <br>
  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center"><a  onclick="sumarAlCarro(${libro.id})" class="btn btn-outline-dark ">Agregar al Carrito</a></div>
      <div class="text-center"><a  onclick="quitarDelCarro(${libro.id})" class="btn btn-outline-dark ">Quitar del Carrito</a></div>
     
  </div>
  
</div>       
</div>`;
})

/*

function filtrarLibrosPorGenero(genero) {
    document.getElementById("seccion-card").innerHTML = "";
    const librosFiltrados = libros.filter((libro) => libro.genero === genero);

    librosFiltrados.forEach((libro) => {
        const idButton = `add-cart${libro.id}` 
        document.getElementById("seccion-card").innerHTML += `<div class="card">
            <div class="precio">
                <p>$${libro.price}</p>
            </div>
            <img src="${libro.imagen}">
            <h4>${libro.name}</h4>
            <a class="boton" id="${idButton}" data-id="${libro.id}">Añadir Al Carrito</a>
        </div>`;
    })
}

*/
