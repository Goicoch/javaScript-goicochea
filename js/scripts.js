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

//

  const genero = [ "aventura", "cienciaFiccion", "terror", "gotico"," policial"];
  const autores = ["miguelCervantes", "marquesDeSade", "GOETHE", "janeAusten", "victorHugo"];

 
console.log(autores.length); 

autores.push('edgarAllanPoe');
console.log(autores.length); 
console.log(genero); 
*/
/*
const libro1=[{nombre:"cien años de soledad", autor:"gabriel garcia marquez", stock: 2, precio:1000}];
const libro2=[{nombre:"el cuervo", autor:"edgar allan poe", stock: 3, precio:1500}];
const libro3=[{nombre:"borges cuentos", autor:"jorge luis borges", stock: 5, precio:1200}];
const libro4=[{nombre:"rayuela", autor:"julio cortazar", stock: 3, precio:1100}];
*/

 const carrito=[];

 function sumarAlCarro(libro) {
  carrito.push(libro);
  console.log(carrito);
}

sumarAlCarro({id:001, nombre:"cien años de soledad", autor:"gabriel garcia marquez", precio: 1000});
sumarAlCarro({id:002, nombre:"el cuervo", autor:"edgar allan poe", precio: 1500});
sumarAlCarro({id:003, nombre:"borges cuentos", autor:"jorge luis borges", precio: 1200});
sumarAlCarro({id:004, nombre:"rayuela", autor:"julio cortazar", precio:1100});

function quitarDelCarro(nombreLibro) {
  const i = carrito.indexOf(
    function (libro) {
    return libro.nombre===nombreLibro});
    console.log (i);
    carrito.splice(i, 1);
    console.log(carrito);
}
quitarDelCarro("borges cuentos");




/*
function sumarCarro(libro, stock) {
  const hayStock = confirmarStock(stock);
  if (hayStock == "contamos con stock") {
    console.log("agregaste esto al carrito:" + producto);
    
  }


function confirmarStock(bookStock) {
  if (bookStock > 0) {
    return "Ese lo tenemos en Stock";
     }
     else{
      return "Lo siento, no contamos con Stock";
    }

    
     }
*/