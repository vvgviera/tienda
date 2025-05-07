document.addEventListener("DOMContentLoaded", function () {
    const botonesCompra = document.querySelectorAll(".btn-primary");

    botonesCompra.forEach(boton => {
        boton.addEventListener("click", function () {
            alert("Producto agregado al carrito.");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botonComprar = document.getElementById("comprarBtn");

    botonComprar.addEventListener("click", function () {
        alert("Producto 1 agregado al carrito.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoItems = document.getElementById("carritoItems");
    const total = document.getElementById("total");

    function actualizarCarrito() {
        carritoItems.innerHTML = "";
        let totalPrecio = 0;

        carrito.forEach((producto, index) => {
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.cantidad}</td>
                <td><button class="btn btn-danger" onclick="eliminarProducto(${index})">Eliminar</button></td>
            `;
            carritoItems.appendChild(fila);
            totalPrecio += producto.precio * producto.cantidad;
        });

        total.textContent = totalPrecio.toFixed(2);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    window.eliminarProducto = function (index) {
        carrito.splice(index, 1);
        actualizarCarrito();
    };

    document.getElementById("finalizarCompra").addEventListener("click", function () {
        alert("Compra finalizada. Gracias por tu pedido.");
        carrito = [];
        actualizarCarrito();
    });

    actualizarCarrito();
});


