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
*/


function promedioDeEdad(){
  let sumaEdades = 0;
  for (let i = 1; i <6 ; i++){
    let edad=parseInt(prompt("ingrese edad"+" "+ i));
    sumaEdades = sumaEdades + edad;
  
  } 
  alert("promedio edad" +" " + sumaEdades/5)
  }

  promedioDeEdad();






