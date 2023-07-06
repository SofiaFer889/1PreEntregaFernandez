const verCarrito = document.getElementById("verCarrito");
const modalContainer= document.getElementById("modal-container");
const comprarButtons = document.getElementsByClassName("button");
const cantidadCarrito = document.getElementById("cantCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () => {
  const response = await fetch("./js/productos.json");
  const data = await response.json();

  Array.from(comprarButtons).forEach((button) => {
    button.addEventListener("click", (event) => {
      Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
          x: '1.5rem',
          y: '1.5rem',
        },
        onClick: function(){} 
      }).showToast();

      const productId = parseInt(event.target.dataset.productId);
      const producto = data.find((p) => p.id === productId);
  
      if (producto) {
        carrito.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
        }); 
      }
      carritoConter();
      saveLocal();
    });
  });
};

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const mostrarCarrito = () => {
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
      <span class="delate-product">🗑</span>
    `;

    modalContainer.append(carritoContent);

    let eliminar = carritoContent.querySelector(".delate-product");
    eliminar.addEventListener("click", () => {
      eliminarProducto(productos.id);
    });
  });

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  const totalCont = document.createElement("div");
  totalCont.className =  "total-content";
  totalCont.innerHTML = `total a pagar: $ ${total}`;
  modalContainer.append(totalCont);
  
  const pagarTotal = document.createElement("button");
  pagarTotal.className = "pagar";
  pagarTotal.innerText = "Pagar Compra";
  pagarTotal.addEventListener("click", () => {
    
    Toastify({
      text: "GRACIAS POR SU COMPRA!!!",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, rgb(34, 5, 115), rgb(0, 60, 255))",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
      },
      offset: {
        x: '0rem',
        y: '8.7rem',
      },
      onClick: function(){} 
    }).showToast();

    carrito = [];
    saveLocal();

    carritoConter();
    mostrarCarrito();

  });
 modalContainer.append(pagarTotal);

};

verCarrito.addEventListener("click", mostrarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((productos) => productos.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoConter();
  saveLocal();
  mostrarCarrito();
};

const carritoConter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoConter();
getProductos();

document.addEventListener("keyup", tex => {
  if (tex.target.matches("#buscador")) {
    document.querySelectorAll(".articulos").forEach(art => {
      art.textContent.toLowerCase().includes(tex.target.value.toLowerCase())
      ? art.classList.remove("filtro")
      : art.classList.add("filtro");
    });
  };
});