let productos = [
  { 
    id:1,
    nombre: "lona", 
    precio: 1500, 
  },
  { 
    id:2,
    nombre: "vinilo", 
    precio: 150,
  },
  { 
    id:3,
    nombre: "banner",
    precio: 500,
  },
  { 
    id:4,
    nombre: "sticker",
    precio: 80,
  }
];

const verCarrito = document.getElementById("verCarrito");
const modalContainer= document.getElementById("modal-container");
const comprarButtons = document.getElementsByClassName("button");

let carrito = [];

Array.from(comprarButtons).forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.dataset.productId);
    const producto = productos.find((p) => p.id === productId);

    if (producto) {
      carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
      });
    }
  });
});

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="title">Compra</h1>
  `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "buttonX";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display ="none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((productos) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-contend";
    carritoContent.innerHTML = `
      <h3>${productos.nombre}</h3>
      <h4>${productos.precio}</h4>
    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  const totalCont = document.createElement("div");
  totalCont.className =  "total-content";
  totalCont.innerHTML = `total a pagar: ${total}`;
  modalContainer.append(totalCont)
  
});