

 const carrito=[];

 function sumarAlCarro(libros) {
  carrito.push(libros);
  console.log(carrito);
}

sumarAlCarro({id:001, nombre:"cien años de soledad", autor:"gabriel garcia marquez", precio: 1000});
sumarAlCarro({id:002, nombre:"el cuervo", autor:"edgar allan poe", precio: 1500});
sumarAlCarro({id:003, nombre:"borges cuentos", autor:"jorge luis borges", precio: 1200});
sumarAlCarro({id:004, nombre:"rayuela", autor:"julio cortazar", precio:1100});

function quitarDelCarro(nombreLibro) {
  const index = carrito.findIndex(
    function (libro) {
    return libro.nombre===nombreLibro});
    console.log (index);
    carrito.splice(index, 1);
    console.log(carrito);
}
quitarDelCarro("el cuervo");









