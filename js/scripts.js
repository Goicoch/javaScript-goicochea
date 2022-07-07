
/* ERROR SI NO COMPLETAS
let nombre = prompt("escribi tu nombre");
let edad = prompt("escribi tu edad")

if((nombre !="") && (edad !="")){
    alert( nombre +" "+ edad); 
}else{
    alert("Error: Ingresar nombre y edad");
}*/

/* MULTIPLICADOR
alert ("El 1er numero se multiplicara por el 2do" );
let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i = parseInt(prompt("Ingresar Numero")); i >= 0; ) {
    let resultado = ingresarNumero * i ;
console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}*/

alert("Se mostraran los numeros impares hasta 99")
for (let i = 0; i < 100; i++) {

    if (i % 2) {
      alert( i );
    }
  
  }
