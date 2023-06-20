let selecProductos = Number(prompt("1-lona $1500 2-vinilo $150 3-banner $500 4-stickers $80"));

function cantidadDeProduco() {
  let producto = parseFloat(prompt('Indique cuántos productos desea comprar'));
  return producto;
};

function calcularMonto(producto, precio) {
  if (producto && precio) {
    const montoTotal = precio * producto;
    return montoTotal;
  }
};

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
};

productos.forEach(producto => {
  console.log(producto.nombre);
});

/*alert('Su total a pagar es de: \n' + total);
let direccion = prompt('Por favor, ingrese ladireccion a donde enviarel pedido:');
alert('Su pedido sera enciado a: ' + ' ' + direccion + ' ' + '¡Gracias por su compra!');
console.log(selecProductos);
*/
const verCarrito = document.getElementById("verCarrito");
const modalContainer= document.getElementById("modal-container");
let carrito= [];

const botonesComprar = document.querySelectorAll("#comprar");
botonesComprar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const titulo = boton.parentNode.querySelector(".card-title").innerText;
    carrito.push({
      nombre: titulo,
    });
    console.log("Producto agregado al carrito: " + titulo);
  });
});

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title">Compra</h1>
  `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display ="none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((productos) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-contend";
    carritoContent.innerHTML = `
      <h3>${productos.nombre}</h3>
    `;

    modalContainer.append(carritoContent);
  })
  
});