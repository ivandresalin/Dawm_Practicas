
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "JS Es genial," + miNombre;
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "JS Es genial," + nombreAlmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};


let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "../img/Chansey.ico") {
    miImage.setAttribute("src", "../img/Abra.ico");
  } else {
    miImage.setAttribute("src", "../img/Arbok.ico");
  }
};