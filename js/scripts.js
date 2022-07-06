

/*let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert( nombreIngresado +" "+ apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}*/



/*let nombre = prompt("escribi tu nombre");
let edad = prompt("escribi tu edad")

if((nombre !="") && (edad !="")){
    alert( nombre +" "+ edad); 
}else{
    alert("Error: Ingresar nombre y edad");
}*/

alert ("el numero ingresado se multiplicara del 1 al 10" );
let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i = parseInt(prompt("Ingresar Numero")); i <= 10; i++) {
    let resultado = ingresarNumero * i ;
alert(ingresarNumero +" X "+ i +" = "+ resultado);
}

