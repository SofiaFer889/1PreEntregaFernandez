alert('Bienvenido');
alert("Seleccione el producto que desea: (si desea salir, pulse la tecla 0)");

let selecProductos = Number(prompt("1-lona $1500 2-vinilo $150 3-banner $500 4-stickers $80"));

function cantidadDeProduco() {
  let producto = parseFloat(prompt('Indique cuántos productos desea comprar'));
  return producto;
}

function calcularMonto(producto, precio) {
  if (producto && precio) {
    const montoTotal = precio * producto;
    return montoTotal;
  }
}

let cantidad = cantidadDeProduco();
let total = 0;

let productos = [
  { nombre: "lona", precio: 1500 },
  { nombre: "vinilo", precio: 150 },
  { nombre: "banner", precio: 500 },
  { nombre: "sticker", precio: 80 }
];

while (selecProductos !== 0) {

  switch (selecProductos) {
    case 1:
      total += calcularMonto(cantidad, productos[0].precio);
      break;
    case 2:
      total += calcularMonto(cantidad, productos[1].precio);
      break;
    case 3:
      total += calcularMonto(cantidad, productos[2].precio);
      break;
    case 4:
      total += calcularMonto(cantidad, productos[3].precio);
      break;
    default:
      break;
  }

  selecProductos = Number(prompt("1-lona $1500 2-vinilo $150 3-banner $500 4-sticker $80"));
}

productos.forEach(producto => {
  console.log(producto.nombre);
});

alert('Su total a pagar es de: \n' + total);
let direccion = prompt('Por favor, ingrese ladireccion a donde enviarel pedido:');
alert('Su pedido sera enciado a: ' + ' ' + direccion + ' ' + '¡Gracias por su compra!');
console.log(selecProductos);