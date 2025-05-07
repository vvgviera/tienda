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

