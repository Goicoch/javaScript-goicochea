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

const totalCarrito = localStorage.getItem("totalCarrito");
document.getElementById("totalCart").innerHTML = totalCarrito;

*/



const libros = [
  {"id":001, "name":"Harry Potter","imagen":"harry potter.jpg", "price":3200, "autor":"J.K Rowling", "stock":0},
  {"id":002, "name":"El señor de los anillos","imagen":"lordOfTheRings.png","price":4500, "autor":"J.R.R Tolkien", "stock":0},
  {"id":003, "name":"Juegos del hambre", "price":5000, "imagen":"JDH.webp","autor":"Suzzanne Collins", "stock":0},
  {"id":004, "name":"Animales fantasticos", "price":5000,"imagen":"animales fantasticos.jpeg", "autor":"J.K Rowling", "stock":5},
  {"id":005, "name":"El gato negro", "price":3500,"imagen":"el gato negro.jpg", "autor":"Edgar Allan Poe", "stock":12},
  {"id":006, "name":"El hobbit", "price":4500,"imagen":"el hobbit.jpg", "autor":"J.R.R Tolkien", "stock":17},
  {"id":007, "name":"La naranja mecanica", "price":3900,"imagen":"la naranja portada.jpg", "autor":"Antony Burgess", "stock":20},
  {"id":8, "name":"Prohibido suicidarse en primavera", "price":6000,"imagen":"prohibido suicidarse en primavera.jpg", "autor":"Alejandro Casona", "stock":15}
] ;
const carrito =[];

 function sumarAlCarro(libros) {
  carrito.push(libros);
  console.log(carrito);
}


function quitarDelCarro(nameLibro) {
  const index = carrito.findIndex(
    function (libro) {
    return libro.name===nameLibro});
    if (index !== -1) {
      carrito.splice(index, 1);
    }
    
    
    
}


libros.forEach((libro) => {
  const idButton = `add-cart${libro.id}`; 
  document.getElementById("seccion-card").innerHTML += ` <div  class="col mb-5 "><div class="card ">
                            
  <img class="card-img-top" src="./imagenes/${libro.imagen}" alt="..." />
  
  <div class="card-body p-4">
      <div class="text-center">
          
          <h5 class="fw-bolder"> nombre:${libro.name}</h5>
          
          $${libro.price}
      </div>
  </div>
  
  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center"><a id="${idButton}" onclick="sumarAlCarro()" class="btn btn-outline-dark mt-auto">Agregar al Carrito</a></div>
      <div class="text-center"><a id="${idButton}" onclick="quitarDelCarro()" class="btn btn-outline-dark mt-auto">Quitar del Carrito</a></div>
  </div>
</div>       
</div>`;
})

libros.forEach((libro) => {
  const idButton = `add-cart${libro.id}` 
  document.getElementById(idButton).addEventListener('click', () => {
    carrito.push(libros);   
  })
  
});








